
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scr/env/BuildConfig');
require('./assets/scr/env/HotUpdate');
require('./assets/scr/env/HotUpdateUrl');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scr/env/BuildConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ace4rbQzBGA6IvUKU9cbUm', 'BuildConfig');
// scr/env/BuildConfig.ts

"use strict";
/*
 * @Author: saury
 * @Date: 2021-04-27 10:54:01
 * @Des: 构建所使用的环境
 * @Tips:
 *  - 键值不要修改, 如果需要修改的话, main.js 内的 key 值也需要修改
 *  - 除了开发环境可以在代码内修改, 其他的选项会在打包时自己修改(所以不建议开发者自己手动修改)
 *  - 打包变量值填错时 or 变量值乱改, 都会影响正则匹配 (我把全匹配关了, 只要不修改这几个枚举相关的变量顺序就行, 这样就不会影响正则匹配)
 */
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GAME_JUMP_TO_URL = exports.ENV_URL = exports.PROJECT_ENV = exports.E_ENV_CONFIG = void 0;
/** 项目所有的生产环境 */
exports.E_ENV_CONFIG = require("./HotUpdateUrl").EnvConfig;
/** (热更使用)各环境的版本号, 打包时会自己修改 - 这个使用枚举的变量, 放在最顶部!!! 用于正则匹配第一项 */
var PROJECT_VER = (_a = {},
    _a[exports.E_ENV_CONFIG.DEV] = "1.2.1",
    _a[exports.E_ENV_CONFIG.TEST] = "1.1.1",
    _a[exports.E_ENV_CONFIG.PROD] = "1.0.0",
    _a);
/** 配置 - http请求的url地址 */
var CFG_ENV_URL = (_b = {},
    _b[exports.E_ENV_CONFIG.DEV] = "http://192.168.1.180:8001",
    _b[exports.E_ENV_CONFIG.TEST] = "http://192.168.1.180:8001",
    _b[exports.E_ENV_CONFIG.PROD] = "http://192.168.1.180:8001",
    _b);
/** 配置 - 跳转url */
var CFG_GAME_JUMP_TO_URL = (_c = {},
    _c[exports.E_ENV_CONFIG.DEV] = "https://192.168.1.180:8001/",
    _c[exports.E_ENV_CONFIG.TEST] = "https://192.168.1.180:8001/",
    _c[exports.E_ENV_CONFIG.PROD] = "https://192.168.1.180:8001/",
    _c);
/** 当前项目开发环境 - 开发过程中, 可以使用本地存储来修改开发环境~ */
exports.PROJECT_ENV = "DEV";
/** http请求url */
exports.ENV_URL = CFG_ENV_URL.DEV;
/** 跳转url */
exports.GAME_JUMP_TO_URL = CFG_GAME_JUMP_TO_URL.DEV;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyXFxlbnZcXEJ1aWxkQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7R0FRRzs7OztBQUdILGdCQUFnQjtBQUNILFFBQUEsWUFBWSxHQUlyQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFHeEMsOERBQThEO0FBQzlELElBQU0sV0FBVztJQUNiLEdBQUMsb0JBQVksQ0FBQyxHQUFHLElBQUcsT0FBTztJQUMzQixHQUFDLG9CQUFZLENBQUMsSUFBSSxJQUFHLE9BQU87SUFDNUIsR0FBQyxvQkFBWSxDQUFDLElBQUksSUFBRyxPQUFPO09BQy9CLENBQUE7QUFFRCx3QkFBd0I7QUFDeEIsSUFBTSxXQUFXO0lBQ2IsR0FBQyxvQkFBWSxDQUFDLEdBQUcsSUFBRywyQkFBMkI7SUFDL0MsR0FBQyxvQkFBWSxDQUFDLElBQUksSUFBRywyQkFBMkI7SUFDaEQsR0FBQyxvQkFBWSxDQUFDLElBQUksSUFBRywyQkFBMkI7T0FDbkQsQ0FBQTtBQUVELGlCQUFpQjtBQUNqQixJQUFNLG9CQUFvQjtJQUN0QixHQUFDLG9CQUFZLENBQUMsR0FBRyxJQUFHLDZCQUE2QjtJQUNqRCxHQUFDLG9CQUFZLENBQUMsSUFBSSxJQUFHLDZCQUE2QjtJQUNsRCxHQUFDLG9CQUFZLENBQUMsSUFBSSxJQUFHLDZCQUE2QjtPQUNyRCxDQUFBO0FBRUQseUNBQXlDO0FBQzVCLFFBQUEsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUVqQyxnQkFBZ0I7QUFDSCxRQUFBLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBRXZDLFlBQVk7QUFDQyxRQUFBLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNhdXJ5XHJcbiAqIEBEYXRlOiAyMDIxLTA0LTI3IDEwOjU0OjAxXHJcbiAqIEBEZXM6IOaehOW7uuaJgOS9v+eUqOeahOeOr+Wig1xyXG4gKiBAVGlwczogXHJcbiAqICAtIOmUruWAvOS4jeimgeS/ruaUuSwg5aaC5p6c6ZyA6KaB5L+u5pS555qE6K+dLCBtYWluLmpzIOWGheeahCBrZXkg5YC85Lmf6ZyA6KaB5L+u5pS5XHJcbiAqICAtIOmZpOS6huW8gOWPkeeOr+Wig+WPr+S7peWcqOS7o+eggeWGheS/ruaUuSwg5YW25LuW55qE6YCJ6aG55Lya5Zyo5omT5YyF5pe26Ieq5bex5L+u5pS5KOaJgOS7peS4jeW7uuiuruW8gOWPkeiAheiHquW3seaJi+WKqOS/ruaUuSlcclxuICogIC0g5omT5YyF5Y+Y6YeP5YC85aGr6ZSZ5pe2IG9yIOWPmOmHj+WAvOS5seaUuSwg6YO95Lya5b2x5ZON5q2j5YiZ5Yy56YWNICjmiJHmiorlhajljLnphY3lhbPkuoYsIOWPquimgeS4jeS/ruaUuei/meWHoOS4quaemuS4vuebuOWFs+eahOWPmOmHj+mhuuW6j+WwseihjCwg6L+Z5qC35bCx5LiN5Lya5b2x5ZON5q2j5YiZ5Yy56YWNKVxyXG4gKi9cclxuXHJcblxyXG4vKiog6aG555uu5omA5pyJ55qE55Sf5Lqn546v5aKDICovXHJcbmV4cG9ydCBjb25zdCBFX0VOVl9DT05GSUc6IHtcclxuICAgIERFVjogXCJERVZcIiwgICAgLy8g5byA5Y+R6ICF6Ieq5bex5omT55qE5YyFXHJcbiAgICBURVNUOiBcIlRFU1RcIiwgIC8vIOaJk+e7mea1i+ivleeahOWMhVxyXG4gICAgUFJPRDogXCJQUk9EXCIsICAvLyDmraPlvI/ljIVcclxufSA9IHJlcXVpcmUoXCIuL0hvdFVwZGF0ZVVybFwiKS5FbnZDb25maWc7XHJcblxyXG5cclxuLyoqICjng63mm7Tkvb/nlKgp5ZCE546v5aKD55qE54mI5pys5Y+3LCDmiZPljIXml7bkvJroh6rlt7Hkv67mlLkgLSDov5nkuKrkvb/nlKjmnprkuL7nmoTlj5jph48sIOaUvuWcqOacgOmhtumDqCEhISDnlKjkuo7mraPliJnljLnphY3nrKzkuIDpobkgKi9cclxuY29uc3QgUFJPSkVDVF9WRVIgPSB7XHJcbiAgICBbRV9FTlZfQ09ORklHLkRFVl06IFwiMS4yLjFcIixcclxuICAgIFtFX0VOVl9DT05GSUcuVEVTVF06IFwiMS4xLjFcIixcclxuICAgIFtFX0VOVl9DT05GSUcuUFJPRF06IFwiMS4wLjBcIixcclxufVxyXG5cclxuLyoqIOmFjee9riAtIGh0dHDor7fmsYLnmoR1cmzlnLDlnYAgKi9cclxuY29uc3QgQ0ZHX0VOVl9VUkwgPSB7XHJcbiAgICBbRV9FTlZfQ09ORklHLkRFVl06IFwiaHR0cDovLzE5Mi4xNjguMS4xODA6ODAwMVwiLFxyXG4gICAgW0VfRU5WX0NPTkZJRy5URVNUXTogXCJodHRwOi8vMTkyLjE2OC4xLjE4MDo4MDAxXCIsXHJcbiAgICBbRV9FTlZfQ09ORklHLlBST0RdOiBcImh0dHA6Ly8xOTIuMTY4LjEuMTgwOjgwMDFcIixcclxufVxyXG5cclxuLyoqIOmFjee9riAtIOi3s+i9rHVybCAqL1xyXG5jb25zdCBDRkdfR0FNRV9KVU1QX1RPX1VSTCA9IHtcclxuICAgIFtFX0VOVl9DT05GSUcuREVWXTogXCJodHRwczovLzE5Mi4xNjguMS4xODA6ODAwMS9cIixcclxuICAgIFtFX0VOVl9DT05GSUcuVEVTVF06IFwiaHR0cHM6Ly8xOTIuMTY4LjEuMTgwOjgwMDEvXCIsXHJcbiAgICBbRV9FTlZfQ09ORklHLlBST0RdOiBcImh0dHBzOi8vMTkyLjE2OC4xLjE4MDo4MDAxL1wiLFxyXG59XHJcblxyXG4vKiog5b2T5YmN6aG555uu5byA5Y+R546v5aKDIC0g5byA5Y+R6L+H56iL5LitLCDlj6/ku6Xkvb/nlKjmnKzlnLDlrZjlgqjmnaXkv67mlLnlvIDlj5Hnjq/looN+ICovXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUX0VOViA9IFwiREVWXCI7XHJcblxyXG4vKiogaHR0cOivt+axgnVybCAqL1xyXG5leHBvcnQgY29uc3QgRU5WX1VSTCA9IENGR19FTlZfVVJMLkRFVjtcclxuXHJcbi8qKiDot7Povax1cmwgKi9cclxuZXhwb3J0IGNvbnN0IEdBTUVfSlVNUF9UT19VUkwgPSBDRkdfR0FNRV9KVU1QX1RPX1VSTC5ERVY7Il19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyXFxlbnZcXEhvdFVwZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOFBDO1FBM1BHLGlCQUFXLEdBQWEsSUFBSSxDQUFDLENBQVcsU0FBUztRQUV6QywwQkFBb0IsR0FBRyxJQUFJLENBQUMsQ0FBSSxTQUFTO1FBRXpDLFNBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxlQUFTLEdBQUcsS0FBSyxDQUFDLENBQWMsU0FBUztRQUN6QyxlQUFTLEdBQUcsS0FBSyxDQUFDLENBQWMsa0JBQWtCO1FBQ2xELHFCQUFlLEdBQUcsSUFBSSxDQUFDLENBQVMsTUFBTTs7SUFvUGxELENBQUM7SUFqUEcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVqQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFJLElBQUksQ0FBQyxXQUFtQixDQUFDLFlBQVksQ0FBQztRQUVoRSxFQUFFO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsd0JBQXdCLENBQUMsQ0FBQztRQUV6RyxXQUFXO1FBQ1gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsUUFBUSxFQUFFLFFBQVE7WUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLEdBQUcsaUJBQWlCLEdBQUcsUUFB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QUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25DO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBelBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1U7SUFIWixTQUFTO1FBRjdCLE9BQU87UUFDUCxpQkFBaUIsQ0FBQyxzQkFBc0I7T0FDcEIsU0FBUyxDQThQN0I7SUFBRCxnQkFBQztDQTlQRCxBQThQQyxDQTlQc0MsRUFBRSxDQUFDLFNBQVMsR0E4UGxEO2tCQTlQb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNhdXJ5XHJcbiAqIEBEYXRlOiAyMDIxLTA0LTI3IDEwOjM5OjQ0XHJcbiAqIEBEZXM6IOeDreabtFxyXG4gKiBAVGlwczogXHJcbiAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGUgLy/or6XohJrmnKzlj6/ku6XlnKjnvJbovpHlmajkuK3miafooYwo5pyJ55Sf5ZG95ZGo5pyf55qEKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3RVcGRhdGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Bc3NldClcclxuICAgIG1hbmlmZXN0VXJsOiBjYy5Bc3NldCA9IG51bGw7ICAgICAgICAgICAvLyDng63mm7Tmr5TovoPmlofku7ZcclxuXHJcbiAgICBwcml2YXRlIHZlcnNpb25Db21wYXJlSGFuZGxlID0gbnVsbDsgICAgLy8g54mI5pys5q+U6L6D5Ye95pWwXHJcbiAgICBwcml2YXRlIF9zdG9yYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYW0gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRpbmcgPSBmYWxzZTsgICAgICAgICAgICAgIC8vIOaYr+WQpuWcqOabtOaWsOS4rVxyXG4gICAgcHJpdmF0ZSBfY2FuUmV0cnkgPSBmYWxzZTsgICAgICAgICAgICAgIC8vIOaYr+WQpuWPr+S7pemHjeaWsOeDreabtCjng63mm7TlpLHotKXkuoYpXHJcbiAgICBwcml2YXRlIF91cGRhdGVMaXN0ZW5lciA9IG51bGw7ICAgICAgICAgLy8gPz8/XHJcbiAgICBwcml2YXRlIGN1c3RvbU1hbmlmZXN0U3RyOiBzdHJpbmc7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAvLyBwcm9qZWN0Lm1hbmlmZXN0XHJcbiAgICAgICAgdGhpcy5jdXN0b21NYW5pZmVzdFN0ciA9ICh0aGlzLm1hbmlmZXN0VXJsIGFzIGFueSkuX25hdGl2ZUFzc2V0O1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2VQYXRoID0gKChqc2IuZmlsZVV0aWxzID8ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSA6ICcvJykgKyAnYmxhY2tqYWNrLXJlbW90ZS1hc3NldCcpO1xyXG5cclxuICAgICAgICAvLyDph43lhpnniYjmnKzmr5TovoPlh73mlbBcclxuICAgICAgICB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlID0gZnVuY3Rpb24gKHZlcnNpb25BLCB2ZXJzaW9uQikge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLoh6rlrprkuYnmr5TovoPniYjmnKw6IHZlcnNpb24gQSBpcyBcIiArIHZlcnNpb25BICsgJywgdmVyc2lvbiBCIGlzICcgKyB2ZXJzaW9uQik7XHJcbiAgICAgICAgICAgIGxldCB2QSA9IHZlcnNpb25BLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIGxldCB2QiA9IHZlcnNpb25CLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdkEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gcGFyc2VJbnQodkFbaV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGIgPSBwYXJzZUludCh2QltpXSB8fCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEluaXQgd2l0aCBlbXB0eSBtYW5pZmVzdCB1cmwgZm9yIHRlc3RpbmcgY3VzdG9tIG1hbmlmZXN0XHJcbiAgICAgICAgdGhpcy5fYW0gPSBuZXcganNiLkFzc2V0c01hbmFnZXIoJycsIHRoaXMuX3N0b3JhZ2VQYXRoLCB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlKTtcclxuXHJcbiAgICAgICAgLy8g6K6+572u6aqM6K+B5Zue6LCDLCDkvYbmiJHku6zov5jmsqHmnIltZDXmoKHpqozlh73mlbAsIOaJgOS7peWPquacieaJk+WNsOS4gOS6m+a2iOaBr1xyXG4gICAgICAgIC8vIOmqjOivgemAmui/h+i/lOWbnnRydWUsIOWQpuWImei/lOWbnmZhbHNlXHJcbiAgICAgICAgdGhpcy5fYW0uc2V0VmVyaWZ5Q2FsbGJhY2soZnVuY3Rpb24gKHBhdGgsIGFzc2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wcmVzc2VkID0gYXNzZXQuY29tcHJlc3NlZDsvLyBXaGVuIGFzc2V0IGlzIGNvbXByZXNzZWQsIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgaXRzIG1kNSwgYmVjYXVzZSB6aXAgZmlsZSBoYXZlIGJlZW4gZGVsZXRlZC5cclxuICAgICAgICAgICAgbGV0IGV4cGVjdGVkTUQ1ID0gYXNzZXQubWQ1OyAgICAvLyDojrflj5bmraPnoa7nmoRtZDXlgLxcclxuICAgICAgICAgICAgbGV0IHJlbGF0aXZlUGF0aCA9IGFzc2V0LnBhdGg7ICAvLyBhc3NldC5wYXRoIGlzIHJlbGF0aXZlIHBhdGggYW5kIHBhdGggaXMgYWJzb2x1dGUuXHJcbiAgICAgICAgICAgIGxldCBzaXplID0gYXNzZXQuc2l6ZTsgICAgICAgICAgLy8gVGhlIHNpemUgb2YgYXNzZXQgZmlsZSwgYnV0IHRoaXMgdmFsdWUgY291bGQgYmUgYWJzZW50LlxyXG4gICAgICAgICAgICBpZiAoY29tcHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggXCJWZXJpZmljYXRpb24gcGFzc2VkIDogXCIgKyByZWxhdGl2ZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBcIlZlcmlmaWNhdGlvbiBwYXNzZWQ6XCIgKyByZWxhdGl2ZVBhdGggKyBcIihcIiArIGV4cGVjdGVkTUQ1ICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgLy8gU29tZSBBbmRyb2lkIGRldmljZSBtYXkgc2xvdyBkb3duIHRoZSBkb3dubG9hZCBwcm9jZXNzIHdoZW4gY29uY3VycmVudCB0YXNrcyBpcyB0b28gbXVjaC5cclxuICAgICAgICAgICAgLy8gVGhlIHZhbHVlIG1heSBub3QgYmUgYWNjdXJhdGUsIHBsZWFzZSBkbyBtb3JlIHRlc3QgYW5kIGZpbmQgd2hhdCdzIG1vc3Qgc3VpdGFibGUgZm9yIHlvdXIgZ2FtZS5cclxuICAgICAgICAgICAgdGhpcy5fYW0uc2V0TWF4Q29uY3VycmVudFRhc2soMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVudHJhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS1cclxuXHJcbiAgICAvKiog54Ot5pu05YWl5Y+jICovXHJcbiAgICBlbnRyYW5jZSgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWlveWDj+ayoeacieeUqOWIsCAqL1xyXG4gICAgbG9hZEN1c3RvbU1hbmlmZXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9hbS5nZXRTdGF0ZSgpID09PSBqc2IuQXNzZXRzTWFuYWdlci5TdGF0ZS5VTklOSVRFRCkge1xyXG4gICAgICAgICAgICBsZXQgbWFuaWZlc3QgPSBuZXcganNiLk1hbmlmZXN0KHRoaXMuY3VzdG9tTWFuaWZlc3RTdHIsIHRoaXMuX3N0b3JhZ2VQYXRoKTtcclxuICAgICAgICAgICAgdGhpcy5fYW0ubG9hZExvY2FsTWFuaWZlc3QobWFuaWZlc3QsIHRoaXMuX3N0b3JhZ2VQYXRoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGN1c3RvbSBtYW5pZmVzdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5qOA5p+l5pu05pawIC0g5Zue6LCDICovXHJcbiAgICBwcml2YXRlIGNoZWNrQ2IoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29kZTogJyArIGV2ZW50LmdldEV2ZW50Q29kZSgpKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9OT19MT0NBTF9NQU5JRkVTVDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyq5om+5Yiw5pys5Zyw5riF5Y2V5paH5Lu277yM5bey6Lez6L+H54Ot5pu05paw44CCXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RPV05MT0FEX01BTklGRVNUOlxyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfUEFSU0VfTUFOSUZFU1Q6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOazleS4i+i9vea4heWNleaWh+S7tu+8jOW3sui3s+i/h+eDreabtOaWsOOAglwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW3sue7j+aYr+acgOaWsOeahOi/nOeoi+eJiOacrOOAglwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5ORVdfVkVSU0lPTl9GT1VORDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmlrDniYjmnKwhISwgcGxlYXNlIHRyeSB0byB1cGRhdGUuICgnICsgdGhpcy5fYW0uZ2V0VG90YWxCeXRlcygpICsgJyknKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG90VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOajgOafpeabtOaWsCAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja1VwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXBkYXRpbmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ajgOafpeabtOaWsOS4rSAuLi4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMubWFuaWZlc3RVcmwubmF0aXZlVXJsOyAgIC8vIFJlc29sdmUgbWQ1IHVybFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaWsOWMheeahCBtYW5pZmVzdFVybC11dWlkIDpcIiwgdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5fYW0ubG9hZExvY2FsTWFuaWZlc3QodXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FtLmdldExvY2FsTWFuaWZlc3QoKSwgdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpLmlzTG9hZGVkKCkpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpIHx8ICF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuaXNMb2FkZWQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pyq6IO95Yqg6L295pys5Zyw5riF5Y2VLi4uJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLmNoZWNrQ2IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FtLmNoZWNrVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDng63mm7QgLSDlm57osIMgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNiKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5lZWRSZXN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZ2V0RXZlbnRDb2RlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX05PX0xPQ0FMX01BTklGRVNUOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+acquaJvuWIsOacrOWcsOa4heWNleaWh+S7tu+8jOW3sui3s+i/h+eDreabtOaWsOOAgicpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX1BST0dSRVNTSU9OOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmm7TmlrAuIOWtl+iKgui/m+W6plwiLCBldmVudC5nZXREb3dubG9hZGVkQnl0ZXMoKSArICcgLyAnICsgZXZlbnQuZ2V0VG90YWxCeXRlcygpLCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCLmlofku7bov5vluqY6XCIsIGV2ZW50LmdldERvd25sb2FkZWRGaWxlcygpICsgJyAvICcgKyBldmVudC5nZXRUb3RhbEZpbGVzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtc2cgPSBldmVudC5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0ZWQgZmlsZTogJyArIG1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RPV05MT0FEX01BTklGRVNUOlxyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfUEFSU0VfTUFOSUZFU1Q6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5peg5rOV5LiL6L295riF5Y2V5paH5Lu277yM5bey6Lez6L+H54Ot5pu05paw44CCJyk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bey57uP5piv5pyA5paw55qE6L+c56iL54mI5pys44CCJyk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfRklOSVNIRUQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pu05paw5a6M5oiQ44CCICcgKyBldmVudC5nZXRNZXNzYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgbmVlZFJlc3RhcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfRkFJTEVEOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+abtOaWsOWksei0peOAgiAnICsgZXZlbnQuZ2V0TWVzc2FnZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5SZXRyeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX1VQREFUSU5HOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i1hOS6p+abtOaWsOmUmeivr++8miAnICsgZXZlbnQuZ2V0QXNzZXRJZCgpICsgJywgJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RFQ09NUFJFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6ZSZ6K+v6Kej5Y6L57ypJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5nZXRNZXNzYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmYWlsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oiQ5Yqf54Ot5pu05pawXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVwZW5kIHRoZSBtYW5pZmVzdCdzIHNlYXJjaCBwYXRoXHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hQYXRocyA9IGpzYi5maWxlVXRpbHMuZ2V0U2VhcmNoUGF0aHMoKTtcclxuICAgICAgICAgICAgbGV0IG5ld1BhdGhzID0gdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpLmdldFNlYXJjaFBhdGhzKCk7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KHNlYXJjaFBhdGhzLCBuZXdQYXRocyk7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgcmV0cmlldmVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZGVmYXVsdCBzZWFyY2ggcGF0aCBkdXJpbmcgZ2FtZSBzdGFydHVwLFxyXG4gICAgICAgICAgICAvLyBwbGVhc2UgcmVmZXIgdG8gc2FtcGxlcy9qcy10ZXN0cy9tYWluLmpzIGZvciBkZXRhaWxlZCB1c2FnZS5cclxuICAgICAgICAgICAgLy8gUmUtYWRkIHRoZSBzZWFyY2ggcGF0aHMgaW4gbWFpbi5qcyBpcyB2ZXJ5IGltcG9ydGFudCwgb3RoZXJ3aXNlLCBuZXcgc2NyaXB0cyB3b24ndCB0YWtlIGVmZmVjdC5cclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIb3RVcGRhdGVTZWFyY2hQYXRocycsIEpTT04uc3RyaW5naWZ5KHNlYXJjaFBhdGhzKSk7XHJcbiAgICAgICAgICAgIGpzYi5maWxlVXRpbHMuc2V0U2VhcmNoUGF0aHMoc2VhcmNoUGF0aHMpO1xyXG5cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLnJlc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOeDreabtCAqL1xyXG4gICAgcHJpdmF0ZSBob3RVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FtICYmICF0aGlzLl91cGRhdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKHRoaXMudXBkYXRlQ2IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgbWQ1IHVybFxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMubWFuaWZlc3RVcmwubmF0aXZlVXJsO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNjLmxvYWRlci5tZDVQaXBlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdXJsID0gY2MubG9hZGVyLm1kNVBpcGUudHJhbnNmb3JtVVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhvdFVwZGF0ZSBsb2FkTG9jYWxNYW5pZmVzdDpcIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FtLmxvYWRMb2NhbE1hbmlmZXN0KHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhlY3V0ZSBob3RVcGRhdGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDph43or5Xng63mm7QgKi9cclxuICAgIHJldHJ5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fdXBkYXRpbmcgJiYgdGhpcy5fY2FuUmV0cnkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FuUmV0cnkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXRyeSBmYWlsZWQgQXNzZXRzLi4uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLmRvd25sb2FkRmFpbGVkQXNzZXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scr/env/HotUpdateUrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '765f7/GVMNAQqX7zySu9ZcY', 'HotUpdateUrl');
// scr/env/HotUpdateUrl.js

"use strict";

/*
 * @Author: saury_c@foxmail.com
 * @Date: 2021-04-29 11:24:06
 * @Des: 热更url - 插件包导 ts 代码有问题, 暂时用 js 来写
 * @Tips: 
 */
var EnvConfig;

(function (temp) {
  temp[temp["DEV"] = "DEV"] = "DEV";
  temp[temp["TEST"] = "TEST"] = "TEST";
  temp[temp["PROD"] = "PROD"] = "PROD";
})(EnvConfig || (EnvConfig = {}));

var HotUpdateUrl = "http://192.168.1.180:8001";
module.exports = {
  EnvConfig: EnvConfig,
  HotUpdateUrl: HotUpdateUrl
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyXFxlbnZcXEhvdFVwZGF0ZVVybC5qcyJdLCJuYW1lcyI6WyJFbnZDb25maWciLCJ0ZW1wIiwiSG90VXBkYXRlVXJsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxTQUFKOztBQUNBLENBQUMsVUFBVUMsSUFBVixFQUFnQjtBQUNiQSxFQUFBQSxJQUFJLENBQUNBLElBQUksQ0FBQyxLQUFELENBQUosR0FBYyxLQUFmLENBQUosR0FBNEIsS0FBNUI7QUFDQUEsRUFBQUEsSUFBSSxDQUFDQSxJQUFJLENBQUMsTUFBRCxDQUFKLEdBQWUsTUFBaEIsQ0FBSixHQUE4QixNQUE5QjtBQUNBQSxFQUFBQSxJQUFJLENBQUNBLElBQUksQ0FBQyxNQUFELENBQUosR0FBZSxNQUFoQixDQUFKLEdBQThCLE1BQTlCO0FBQ0gsQ0FKRCxFQUlHRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQUpaOztBQU1BLElBQU1FLFlBQVksR0FBRywyQkFBckI7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JKLEVBQUFBLFNBQVMsRUFBVEEsU0FEYTtBQUViRSxFQUFBQSxZQUFZLEVBQVpBO0FBRmEsQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNhdXJ5X2NAZm94bWFpbC5jb21cclxuICogQERhdGU6IDIwMjEtMDQtMjkgMTE6MjQ6MDZcclxuICogQERlczog54Ot5pu0dXJsIC0g5o+S5Lu25YyF5a+8IHRzIOS7o+eggeaciemXrumimCwg5pqC5pe255SoIGpzIOadpeWGmVxyXG4gKiBAVGlwczogXHJcbiAqL1xyXG5cclxubGV0IEVudkNvbmZpZztcclxuKGZ1bmN0aW9uICh0ZW1wKSB7XHJcbiAgICB0ZW1wW3RlbXBbXCJERVZcIl0gPSBcIkRFVlwiXSA9IFwiREVWXCI7XHJcbiAgICB0ZW1wW3RlbXBbXCJURVNUXCJdID0gXCJURVNUXCJdID0gXCJURVNUXCI7XHJcbiAgICB0ZW1wW3RlbXBbXCJQUk9EXCJdID0gXCJQUk9EXCJdID0gXCJQUk9EXCI7XHJcbn0pKEVudkNvbmZpZyB8fCAoRW52Q29uZmlnID0ge30pKTtcclxuXHJcbmNvbnN0IEhvdFVwZGF0ZVVybCA9IFwiaHR0cDovLzE5Mi4xNjguMS4xODA6ODAwMVwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBFbnZDb25maWcsXHJcbiAgICBIb3RVcGRhdGVVcmwsXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------
