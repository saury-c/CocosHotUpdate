"use strict";
cc._RF.push(module, '4b77aGD9OJFsaZL+oCKweM6', 'HotUpdate');
// scr/env/HotUpdate.ts

"use strict";
/*
 * @Author: saury
 * @Date: 2021-04-27 10:39:44
 * @Des: 热更
 * @Tips:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var HotUpdate = /** @class */ (function (_super) {
    __extends(HotUpdate, _super);
    function HotUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.manifestUrl = null; // 热更比较文件
        _this.versionCompareHandle = null; // 版本比较函数
        _this._am = null;
        _this._updating = false; // 是否在更新中
        _this._canRetry = false; // 是否可以重新热更(热更失败了)
        _this._updateListener = null; // ???
        return _this;
    }
    HotUpdate.prototype.onLoad = function () {
        if (!cc.sys.isNative) {
            return;
        }
        // project.manifest
        this.customManifestStr = this.manifestUrl._nativeAsset;
        //
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');
        // 重写版本比较函数
        this.versionCompareHandle = function (versionA, versionB) {
            cc.log("自定义比较版本: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || 0);
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };
        // Init with empty manifest url for testing custom manifest
        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
        // 设置验证回调, 但我们还没有md5校验函数, 所以只有打印一些消息
        // 验证通过返回true, 否则返回false
        this._am.setVerifyCallback(function (path, asset) {
            var compressed = asset.compressed; // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var expectedMD5 = asset.md5; // 获取正确的md5值
            var relativePath = asset.path; // asset.path is relative path and path is absolute.
            var size = asset.size; // The size of asset file, but this value could be absent.
            if (compressed) {
                //console.log( "Verification passed : " + relativePath);
                return true;
            }
            else {
                //console.log( "Verification passed:" + relativePath + "(" + expectedMD5 + ")");
                return true;
            }
        });
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._am.setMaxConcurrentTask(2);
        }
        this.entrance();
    };
    HotUpdate.prototype.onDestroy = function () {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    };
    // -----
    /** 热更入口 */
    HotUpdate.prototype.entrance = function () {
        this.checkUpdate();
    };
    /** 好像没有用到 */
    HotUpdate.prototype.loadCustomManifest = function () {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var manifest = new jsb.Manifest(this.customManifestStr, this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
            console.log('Using custom manifest');
        }
    };
    /** 检查更新 - 回调 */
    HotUpdate.prototype.checkCb = function (event) {
        var _this = this;
        console.log('Code: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log("未找到本地清单文件，已跳过热更新。");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log("无法下载清单文件，已跳过热更新。");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("已经是最新的远程版本。");
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                console.log('新版本!!, please try to update. (' + this._am.getTotalBytes() + ')');
                setTimeout(function () {
                    _this.hotUpdate();
                }, 100);
                break;
            default:
                return;
        }
        this._am.setEventCallback(null);
        this._updating = false;
    };
    /** 检查更新 */
    HotUpdate.prototype.checkUpdate = function () {
        if (this._updating) {
            console.log('检查更新中 ...');
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var url = this.manifestUrl.nativeUrl; // Resolve md5 url
            console.log("新包的 manifestUrl-uuid :", url);
            this._am.loadLocalManifest(url);
        }
        console.log(this._am.getLocalManifest(), this._am.getLocalManifest().isLoaded());
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            console.log('未能加载本地清单...');
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
        this._updating = true;
    };
    /** 热更 - 回调  */
    HotUpdate.prototype.updateCb = function (event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log('未找到本地清单文件，已跳过热更新。');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                console.log("更新. 字节进度", event.getDownloadedBytes() + ' / ' + event.getTotalBytes(), +"文件进度:", event.getDownloadedFiles() + ' / ' + event.getTotalFiles());
                var msg = event.getMessage();
                if (msg) {
                    console.log('Updated file: ' + msg);
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log('无法下载清单文件，已跳过热更新。');
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log('已经是最新的远程版本。');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                console.log('更新完成。 ' + event.getMessage());
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                console.log('更新失败。 ' + event.getMessage());
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                console.log('资产更新错误： ' + event.getAssetId() + ', ' + event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                console.log('错误解压缩');
                console.log(event.getMessage());
                break;
            default:
                break;
        }
        if (failed) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
        }
        if (needRestart) {
            console.log("成功热更新");
            this._am.setEventCallback(null);
            this._updateListener = null;
            // Prepend the manifest's search path
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    };
    /** 热更 */
    HotUpdate.prototype.hotUpdate = function () {
        if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));
            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                // Resolve md5 url
                var url = this.manifestUrl.nativeUrl;
                // if (cc.loader.md5Pipe) {
                //     url = cc.loader.md5Pipe.transformURL(url);
                // }
                console.log("hotUpdate loadLocalManifest:", url);
                this._am.loadLocalManifest(url);
            }
            this._am.update();
            this._updating = true;
            console.log("execute hotUpdate");
        }
    };
    /** 重试热更 */
    HotUpdate.prototype.retry = function () {
        if (!this._updating && this._canRetry) {
            this._canRetry = false;
            console.log('Retry failed Assets...');
            this._am.downloadFailedAssets();
        }
    };
    __decorate([
        property(cc.Asset)
    ], HotUpdate.prototype, "manifestUrl", void 0);
    HotUpdate = __decorate([
        ccclass,
        executeInEditMode //该脚本可以在编辑器中执行(有生命周期的)
    ], HotUpdate);
    return HotUpdate;
}(cc.Component));
exports.default = HotUpdate;

cc._RF.pop();