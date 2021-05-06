
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scr/env/HotUpdate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        property({ type: cc.Asset })
    ], HotUpdate.prototype, "manifestUrl", void 0);
    HotUpdate = __decorate([
        ccclass,
        executeInEditMode //该脚本可以在编辑器中执行(有生命周期的)
    ], HotUpdate);
    return HotUpdate;
}(cc.Component));
exports.default = HotUpdate;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyXFxlbnZcXEhvdFVwZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOFBDO1FBM1BHLGlCQUFXLEdBQWEsSUFBSSxDQUFDLENBQVcsU0FBUztRQUV6QywwQkFBb0IsR0FBRyxJQUFJLENBQUMsQ0FBSSxTQUFTO1FBRXpDLFNBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxlQUFTLEdBQUcsS0FBSyxDQUFDLENBQWMsU0FBUztRQUN6QyxlQUFTLEdBQUcsS0FBSyxDQUFDLENBQWMsa0JBQWtCO1FBQ2xELHFCQUFlLEdBQUcsSUFBSSxDQUFDLENBQVMsTUFBTTs7SUFvUGxELENBQUM7SUFqUEcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVqQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFJLElBQUksQ0FBQyxXQUFtQixDQUFDLFlBQVksQ0FBQztRQUVoRSxFQUFFO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsd0JBQXdCLENBQUMsQ0FBQztRQUV6RyxXQUFXO1FBQ1gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsUUFBUSxFQUFFLFFBQVE7WUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLEdBQUcsaUJBQWlCLEdBQUcsUUFB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QUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25DO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBelBEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztrREFDQTtJQUhaLFNBQVM7UUFGN0IsT0FBTztRQUNQLGlCQUFpQixDQUFDLHNCQUFzQjtPQUNwQixTQUFTLENBOFA3QjtJQUFELGdCQUFDO0NBOVBELEFBOFBDLENBOVBzQyxFQUFFLENBQUMsU0FBUyxHQThQbEQ7a0JBOVBvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogc2F1cnlcclxuICogQERhdGU6IDIwMjEtMDQtMjcgMTA6Mzk6NDRcclxuICogQERlczog54Ot5pu0XHJcbiAqIEBUaXBzOiBcclxuICovXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBleGVjdXRlSW5FZGl0TW9kZSAvL+ivpeiEmuacrOWPr+S7peWcqOe8lui+keWZqOS4reaJp+ihjCjmnInnlJ/lkb3lkajmnJ/nmoQpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdFVwZGF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXNzZXQgfSlcclxuICAgIG1hbmlmZXN0VXJsOiBjYy5Bc3NldCA9IG51bGw7ICAgICAgICAgICAvLyDng63mm7Tmr5TovoPmlofku7ZcclxuXHJcbiAgICBwcml2YXRlIHZlcnNpb25Db21wYXJlSGFuZGxlID0gbnVsbDsgICAgLy8g54mI5pys5q+U6L6D5Ye95pWwXHJcbiAgICBwcml2YXRlIF9zdG9yYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYW0gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRpbmcgPSBmYWxzZTsgICAgICAgICAgICAgIC8vIOaYr+WQpuWcqOabtOaWsOS4rVxyXG4gICAgcHJpdmF0ZSBfY2FuUmV0cnkgPSBmYWxzZTsgICAgICAgICAgICAgIC8vIOaYr+WQpuWPr+S7pemHjeaWsOeDreabtCjng63mm7TlpLHotKXkuoYpXHJcbiAgICBwcml2YXRlIF91cGRhdGVMaXN0ZW5lciA9IG51bGw7ICAgICAgICAgLy8gPz8/XHJcbiAgICBwcml2YXRlIGN1c3RvbU1hbmlmZXN0U3RyOiBzdHJpbmc7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAvLyBwcm9qZWN0Lm1hbmlmZXN0XHJcbiAgICAgICAgdGhpcy5jdXN0b21NYW5pZmVzdFN0ciA9ICh0aGlzLm1hbmlmZXN0VXJsIGFzIGFueSkuX25hdGl2ZUFzc2V0O1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2VQYXRoID0gKChqc2IuZmlsZVV0aWxzID8ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSA6ICcvJykgKyAnYmxhY2tqYWNrLXJlbW90ZS1hc3NldCcpO1xyXG5cclxuICAgICAgICAvLyDph43lhpnniYjmnKzmr5TovoPlh73mlbBcclxuICAgICAgICB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlID0gZnVuY3Rpb24gKHZlcnNpb25BLCB2ZXJzaW9uQikge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLoh6rlrprkuYnmr5TovoPniYjmnKw6IHZlcnNpb24gQSBpcyBcIiArIHZlcnNpb25BICsgJywgdmVyc2lvbiBCIGlzICcgKyB2ZXJzaW9uQik7XHJcbiAgICAgICAgICAgIGxldCB2QSA9IHZlcnNpb25BLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIGxldCB2QiA9IHZlcnNpb25CLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdkEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gcGFyc2VJbnQodkFbaV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGIgPSBwYXJzZUludCh2QltpXSB8fCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEluaXQgd2l0aCBlbXB0eSBtYW5pZmVzdCB1cmwgZm9yIHRlc3RpbmcgY3VzdG9tIG1hbmlmZXN0XHJcbiAgICAgICAgdGhpcy5fYW0gPSBuZXcganNiLkFzc2V0c01hbmFnZXIoJycsIHRoaXMuX3N0b3JhZ2VQYXRoLCB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlKTtcclxuXHJcbiAgICAgICAgLy8g6K6+572u6aqM6K+B5Zue6LCDLCDkvYbmiJHku6zov5jmsqHmnIltZDXmoKHpqozlh73mlbAsIOaJgOS7peWPquacieaJk+WNsOS4gOS6m+a2iOaBr1xyXG4gICAgICAgIC8vIOmqjOivgemAmui/h+i/lOWbnnRydWUsIOWQpuWImei/lOWbnmZhbHNlXHJcbiAgICAgICAgdGhpcy5fYW0uc2V0VmVyaWZ5Q2FsbGJhY2soZnVuY3Rpb24gKHBhdGgsIGFzc2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wcmVzc2VkID0gYXNzZXQuY29tcHJlc3NlZDsvLyBXaGVuIGFzc2V0IGlzIGNvbXByZXNzZWQsIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgaXRzIG1kNSwgYmVjYXVzZSB6aXAgZmlsZSBoYXZlIGJlZW4gZGVsZXRlZC5cclxuICAgICAgICAgICAgbGV0IGV4cGVjdGVkTUQ1ID0gYXNzZXQubWQ1OyAgICAvLyDojrflj5bmraPnoa7nmoRtZDXlgLxcclxuICAgICAgICAgICAgbGV0IHJlbGF0aXZlUGF0aCA9IGFzc2V0LnBhdGg7ICAvLyBhc3NldC5wYXRoIGlzIHJlbGF0aXZlIHBhdGggYW5kIHBhdGggaXMgYWJzb2x1dGUuXHJcbiAgICAgICAgICAgIGxldCBzaXplID0gYXNzZXQuc2l6ZTsgICAgICAgICAgLy8gVGhlIHNpemUgb2YgYXNzZXQgZmlsZSwgYnV0IHRoaXMgdmFsdWUgY291bGQgYmUgYWJzZW50LlxyXG4gICAgICAgICAgICBpZiAoY29tcHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggXCJWZXJpZmljYXRpb24gcGFzc2VkIDogXCIgKyByZWxhdGl2ZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBcIlZlcmlmaWNhdGlvbiBwYXNzZWQ6XCIgKyByZWxhdGl2ZVBhdGggKyBcIihcIiArIGV4cGVjdGVkTUQ1ICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgLy8gU29tZSBBbmRyb2lkIGRldmljZSBtYXkgc2xvdyBkb3duIHRoZSBkb3dubG9hZCBwcm9jZXNzIHdoZW4gY29uY3VycmVudCB0YXNrcyBpcyB0b28gbXVjaC5cclxuICAgICAgICAgICAgLy8gVGhlIHZhbHVlIG1heSBub3QgYmUgYWNjdXJhdGUsIHBsZWFzZSBkbyBtb3JlIHRlc3QgYW5kIGZpbmQgd2hhdCdzIG1vc3Qgc3VpdGFibGUgZm9yIHlvdXIgZ2FtZS5cclxuICAgICAgICAgICAgdGhpcy5fYW0uc2V0TWF4Q29uY3VycmVudFRhc2soMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVudHJhbmNlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXBkYXRlTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLVxyXG5cclxuICAgIC8qKiDng63mm7TlhaXlj6MgKi9cclxuICAgIGVudHJhbmNlKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5aW95YOP5rKh5pyJ55So5YiwICovXHJcbiAgICBsb2FkQ3VzdG9tTWFuaWZlc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FtLmdldFN0YXRlKCkgPT09IGpzYi5Bc3NldHNNYW5hZ2VyLlN0YXRlLlVOSU5JVEVEKSB7XHJcbiAgICAgICAgICAgIGxldCBtYW5pZmVzdCA9IG5ldyBqc2IuTWFuaWZlc3QodGhpcy5jdXN0b21NYW5pZmVzdFN0ciwgdGhpcy5fc3RvcmFnZVBhdGgpO1xyXG4gICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdChtYW5pZmVzdCwgdGhpcy5fc3RvcmFnZVBhdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgY3VzdG9tIG1hbmlmZXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmo4Dmn6Xmm7TmlrAgLSDlm57osIMgKi9cclxuICAgIHByaXZhdGUgY2hlY2tDYihldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb2RlOiAnICsgZXZlbnQuZ2V0RXZlbnRDb2RlKCkpO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZ2V0RXZlbnRDb2RlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX05PX0xPQ0FMX01BTklGRVNUOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKrmib7liLDmnKzlnLDmuIXljZXmlofku7bvvIzlt7Lot7Pov4fng63mm7TmlrDjgIJcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfRE9XTkxPQURfTUFOSUZFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9QQVJTRV9NQU5JRkVTVDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5peg5rOV5LiL6L295riF5Y2V5paH5Lu277yM5bey6Lez6L+H54Ot5pu05paw44CCXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkFMUkVBRFlfVVBfVE9fREFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bey57uP5piv5pyA5paw55qE6L+c56iL54mI5pys44CCXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLk5FV19WRVJTSU9OX0ZPVU5EOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aWsOeJiOacrCEhLCBwbGVhc2UgdHJ5IHRvIHVwZGF0ZS4gKCcgKyB0aGlzLl9hbS5nZXRUb3RhbEJ5dGVzKCkgKyAnKScpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3RVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5qOA5p+l5pu05pawICovXHJcbiAgICBwcml2YXRlIGNoZWNrVXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl91cGRhdGluZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5qOA5p+l5pu05paw5LitIC4uLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hbS5nZXRTdGF0ZSgpID09PSBqc2IuQXNzZXRzTWFuYWdlci5TdGF0ZS5VTklOSVRFRCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tYW5pZmVzdFVybC5uYXRpdmVVcmw7ICAgLy8gUmVzb2x2ZSBtZDUgdXJsXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5paw5YyF55qEIG1hbmlmZXN0VXJsLXV1aWQgOlwiLCB1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdCh1cmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpLCB0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuaXNMb2FkZWQoKSlcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkgfHwgIXRoaXMuX2FtLmdldExvY2FsTWFuaWZlc3QoKS5pc0xvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmnKrog73liqDovb3mnKzlnLDmuIXljZUuLi4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKHRoaXMuY2hlY2tDYi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYW0uY2hlY2tVcGRhdGUoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOeDreabtCAtIOWbnuiwgyAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ2IoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbmVlZFJlc3RhcnQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZmFpbGVkID0gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5nZXRFdmVudENvZGUoKSkge1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfTk9fTE9DQUxfTUFOSUZFU1Q6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pyq5om+5Yiw5pys5Zyw5riF5Y2V5paH5Lu277yM5bey6Lez6L+H54Ot5pu05paw44CCJyk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfUFJPR1JFU1NJT046XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuabtOaWsC4g5a2X6IqC6L+b5bqmXCIsIGV2ZW50LmdldERvd25sb2FkZWRCeXRlcygpICsgJyAvICcgKyBldmVudC5nZXRUb3RhbEJ5dGVzKCksICtcclxuICAgICAgICAgICAgICAgICAgICBcIuaWh+S7tui/m+W6pjpcIiwgZXZlbnQuZ2V0RG93bmxvYWRlZEZpbGVzKCkgKyAnIC8gJyArIGV2ZW50LmdldFRvdGFsRmlsZXMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1zZyA9IGV2ZW50LmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlZCBmaWxlOiAnICsgbXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfRE9XTkxPQURfTUFOSUZFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9QQVJTRV9NQU5JRkVTVDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfml6Dms5XkuIvovb3muIXljZXmlofku7bvvIzlt7Lot7Pov4fng63mm7TmlrDjgIInKTtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkFMUkVBRFlfVVBfVE9fREFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflt7Lnu4/mmK/mnIDmlrDnmoTov5znqIvniYjmnKzjgIInKTtcclxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLlVQREFURV9GSU5JU0hFRDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmm7TmlrDlrozmiJDjgIIgJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICBuZWVkUmVzdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLlVQREFURV9GQUlMRUQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pu05paw5aSx6LSl44CCICcgKyBldmVudC5nZXRNZXNzYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhblJldHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfVVBEQVRJTkc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6LWE5Lqn5pu05paw6ZSZ6K+v77yaICcgKyBldmVudC5nZXRBc3NldElkKCkgKyAnLCAnICsgZXZlbnQuZ2V0TWVzc2FnZSgpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfREVDT01QUkVTUzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfplJnor6/op6PljovnvKknKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmdldE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZhaWxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmVlZFJlc3RhcnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiJDlip/ng63mm7TmlrBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBlbmQgdGhlIG1hbmlmZXN0J3Mgc2VhcmNoIHBhdGhcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFBhdGhzID0ganNiLmZpbGVVdGlscy5nZXRTZWFyY2hQYXRocygpO1xyXG4gICAgICAgICAgICBsZXQgbmV3UGF0aHMgPSB0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuZ2V0U2VhcmNoUGF0aHMoKTtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoc2VhcmNoUGF0aHMsIG5ld1BhdGhzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgdmFsdWUgd2lsbCBiZSByZXRyaWV2ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkZWZhdWx0IHNlYXJjaCBwYXRoIGR1cmluZyBnYW1lIHN0YXJ0dXAsXHJcbiAgICAgICAgICAgIC8vIHBsZWFzZSByZWZlciB0byBzYW1wbGVzL2pzLXRlc3RzL21haW4uanMgZm9yIGRldGFpbGVkIHVzYWdlLlxyXG4gICAgICAgICAgICAvLyBSZS1hZGQgdGhlIHNlYXJjaCBwYXRocyBpbiBtYWluLmpzIGlzIHZlcnkgaW1wb3J0YW50LCBvdGhlcndpc2UsIG5ldyBzY3JpcHRzIHdvbid0IHRha2UgZWZmZWN0LlxyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hvdFVwZGF0ZVNlYXJjaFBhdGhzJywgSlNPTi5zdHJpbmdpZnkoc2VhcmNoUGF0aHMpKTtcclxuICAgICAgICAgICAganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhzZWFyY2hQYXRocyk7XHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUucmVzdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog54Ot5pu0ICovXHJcbiAgICBwcml2YXRlIGhvdFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYW0gJiYgIXRoaXMuX3VwZGF0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sodGhpcy51cGRhdGVDYi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbS5nZXRTdGF0ZSgpID09PSBqc2IuQXNzZXRzTWFuYWdlci5TdGF0ZS5VTklOSVRFRCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBtZDUgdXJsXHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tYW5pZmVzdFVybC5uYXRpdmVVcmw7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoY2MubG9hZGVyLm1kNVBpcGUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB1cmwgPSBjYy5sb2FkZXIubWQ1UGlwZS50cmFuc2Zvcm1VUkwodXJsKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG90VXBkYXRlIGxvYWRMb2NhbE1hbmlmZXN0OlwiLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW0ubG9hZExvY2FsTWFuaWZlc3QodXJsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fYW0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGVjdXRlIGhvdFVwZGF0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmHjeivleeDreabtCAqL1xyXG4gICAgcmV0cnkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl91cGRhdGluZyAmJiB0aGlzLl9jYW5SZXRyeSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5SZXRyeSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJ5IGZhaWxlZCBBc3NldHMuLi4nKTtcclxuICAgICAgICAgICAgdGhpcy5fYW0uZG93bmxvYWRGYWlsZWRBc3NldHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==