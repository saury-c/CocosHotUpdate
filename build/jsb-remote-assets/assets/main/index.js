window.__require = function t(e, s, a) {
function o(i, r) {
if (!s[i]) {
if (!e[i]) {
var l = i.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!r && c) return c(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = l;
}
var _ = s[i] = {
exports: {}
};
e[i][0].call(_.exports, function(t) {
return o(e[i][1][t] || t);
}, _, _.exports, t, e, s, a);
}
return s[i].exports;
}
for (var n = "function" == typeof __require && __require, i = 0; i < a.length; i++) o(a[i]);
return o;
}({
BuildConfig: [ function(t, e, s) {
"use strict";
cc._RF.push(e, "9ace4rbQzBGA6IvUKU9cbUm", "BuildConfig");
var a, o, n;
Object.defineProperty(s, "__esModule", {
value: !0
});
s.GAME_JUMP_TO_URL = s.ENV_URL = s.PROJECT_ENV = s.E_ENV_CONFIG = void 0;
s.E_ENV_CONFIG = t("./HotUpdateUrl").EnvConfig;
(a = {})[s.E_ENV_CONFIG.DEV] = "1.2.2", a[s.E_ENV_CONFIG.TEST] = "1.1.1", a[s.E_ENV_CONFIG.PROD] = "1.0.0";
var i = ((o = {})[s.E_ENV_CONFIG.DEV] = "http://192.168.1.180:8001", o[s.E_ENV_CONFIG.TEST] = "http://192.168.1.180:8001", 
o[s.E_ENV_CONFIG.PROD] = "http://192.168.1.180:8001", o), r = ((n = {})[s.E_ENV_CONFIG.DEV] = "https://192.168.1.180:8001/", 
n[s.E_ENV_CONFIG.TEST] = "https://192.168.1.180:8001/", n[s.E_ENV_CONFIG.PROD] = "https://192.168.1.180:8001/", 
n);
s.PROJECT_ENV = "DEV";
s.ENV_URL = i.DEV;
s.GAME_JUMP_TO_URL = r.DEV;
cc._RF.pop();
}, {
"./HotUpdateUrl": "HotUpdateUrl"
} ],
HotUpdateUrl: [ function(t, e) {
"use strict";
cc._RF.push(e, "765f7/GVMNAQqX7zySu9ZcY", "HotUpdateUrl");
var s;
(function(t) {
t[t.DEV = "DEV"] = "DEV";
t[t.TEST = "TEST"] = "TEST";
t[t.PROD = "PROD"] = "PROD";
})(s || (s = {}));
e.exports = {
EnvConfig: s,
HotUpdateUrl: "http://192.168.1.180:8001"
};
cc._RF.pop();
}, {} ],
HotUpdate: [ function(t, e, s) {
"use strict";
cc._RF.push(e, "4b77aGD9OJFsaZL+oCKweM6", "HotUpdate");
var a, o = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
})(t, e);
}, function(t, e) {
a(t, e);
function s() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s());
}), n = this && this.__decorate || function(t, e, s, a) {
var o, n = arguments.length, i = n < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, s) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, s, a); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (i = (n < 3 ? o(i) : n > 3 ? o(e, s, i) : o(e, s)) || i);
return n > 3 && i && Object.defineProperty(e, s, i), i;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, l = i.property, c = i.executeInEditMode, _ = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.manifestUrl = null;
e.versionCompareHandle = null;
e._am = null;
e._updating = !1;
e._canRetry = !1;
e._updateListener = null;
return e;
}
e.prototype.onLoad = function() {
if (cc.sys.isNative) {
this.customManifestStr = this.manifestUrl._nativeAsset;
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
this.versionCompareHandle = function(t, e) {
cc.log("自定义比较版本: version A is " + t + ", version B is " + e);
for (var s = t.split("."), a = e.split("."), o = 0; o < s.length; ++o) {
var n = parseInt(s[o]), i = parseInt(a[o] || 0);
if (n !== i) return n - i;
}
return a.length > s.length ? -1 : 0;
};
this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
this._am.setVerifyCallback(function(t, e) {
e.compressed, e.md5, e.path, e.size;
return !0;
});
cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2);
this.entrance();
}
};
e.prototype.onDestroy = function() {
if (this._updateListener) {
this._am.setEventCallback(null);
this._updateListener = null;
}
};
e.prototype.entrance = function() {
this.checkUpdate();
};
e.prototype.loadCustomManifest = function() {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(this.customManifestStr, this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
console.log("Using custom manifest");
}
};
e.prototype.checkCb = function(t) {
var e = this;
console.log("Code: " + t.getEventCode());
switch (t.getEventCode()) {
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
console.log("新版本!!, please try to update. (" + this._am.getTotalBytes() + ")");
setTimeout(function() {
e.hotUpdate();
}, 100);
break;

default:
return;
}
this._am.setEventCallback(null);
this._updating = !1;
};
e.prototype.checkUpdate = function() {
if (this._updating) console.log("检查更新中 ..."); else {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = this.manifestUrl.nativeUrl;
console.log("新包的 manifestUrl-uuid :", t);
this._am.loadLocalManifest(t);
}
console.log(this._am.getLocalManifest(), this._am.getLocalManifest().isLoaded());
if (this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded()) {
this._am.setEventCallback(this.checkCb.bind(this));
this._am.checkUpdate();
this._updating = !0;
} else console.log("未能加载本地清单...");
}
};
e.prototype.updateCb = function(t) {
var e = !1, s = !1;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
console.log("未找到本地清单文件，已跳过热更新。");
s = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
console.log("更新. 字节进度", t.getDownloadedBytes() + " / " + t.getTotalBytes(), NaN, t.getDownloadedFiles() + " / " + t.getTotalFiles());
var a = t.getMessage();
a && console.log("Updated file: " + a);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
console.log("无法下载清单文件，已跳过热更新。");
s = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("已经是最新的远程版本。");
s = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
console.log("更新完成。 " + t.getMessage());
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
console.log("更新失败。 " + t.getMessage());
this._updating = !1;
this._canRetry = !0;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
console.log("资产更新错误： " + t.getAssetId() + ", " + t.getMessage());
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
console.log("错误解压缩");
console.log(t.getMessage());
}
if (s) {
this._am.setEventCallback(null);
this._updateListener = null;
this._updating = !1;
}
if (e) {
console.log("成功热更新");
this._am.setEventCallback(null);
this._updateListener = null;
var o = jsb.fileUtils.getSearchPaths(), n = this._am.getLocalManifest().getSearchPaths();
Array.prototype.unshift.apply(o, n);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o));
jsb.fileUtils.setSearchPaths(o);
cc.audioEngine.stopAll();
cc.game.restart();
}
};
e.prototype.hotUpdate = function() {
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCb.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = this.manifestUrl.nativeUrl;
console.log("hotUpdate loadLocalManifest:", t);
this._am.loadLocalManifest(t);
}
this._am.update();
this._updating = !0;
console.log("execute hotUpdate");
}
};
e.prototype.retry = function() {
if (!this._updating && this._canRetry) {
this._canRetry = !1;
console.log("Retry failed Assets...");
this._am.downloadFailedAssets();
}
};
n([ l({
type: cc.Asset
}) ], e.prototype, "manifestUrl", void 0);
return n([ r, c ], e);
}(cc.Component);
s.default = _;
cc._RF.pop();
}, {} ]
}, {}, [ "BuildConfig", "HotUpdate", "HotUpdateUrl" ]);