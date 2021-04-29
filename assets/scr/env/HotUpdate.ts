/*
 * @Author: saury
 * @Date: 2021-04-27 10:39:44
 * @Des: 热更
 * @Tips: 
 */

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode //该脚本可以在编辑器中执行(有生命周期的)
export default class HotUpdate extends cc.Component {

    @property(cc.Asset)
    manifestUrl: cc.Asset = null;           // 热更比较文件

    private versionCompareHandle = null;    // 版本比较函数
    private _storagePath: string;
    private _am = null;
    private _updating = false;              // 是否在更新中
    private _canRetry = false;              // 是否可以重新热更(热更失败了)
    private _updateListener = null;         // ???
    private customManifestStr: string;

    onLoad() {
        if (!cc.sys.isNative) { return; }

        // project.manifest
        this.customManifestStr = (this.manifestUrl as any)._nativeAsset;

        //
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');

        // 重写版本比较函数
        this.versionCompareHandle = function (versionA, versionB) {
            cc.log("自定义比较版本: version A is " + versionA + ', version B is ' + versionB);
            let vA = versionA.split('.');
            let vB = versionB.split('.');
            for (let i = 0; i < vA.length; ++i) {
                let a = parseInt(vA[i]);
                let b = parseInt(vB[i] || 0);
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
            let compressed = asset.compressed;// When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            let expectedMD5 = asset.md5;    // 获取正确的md5值
            let relativePath = asset.path;  // asset.path is relative path and path is absolute.
            let size = asset.size;          // The size of asset file, but this value could be absent.
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
    }

    
    onDestroy() {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    }

    // -----

    /** 热更入口 */
    entrance() {
        this.checkUpdate();
    }

    /** 好像没有用到 */
    loadCustomManifest() {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            let manifest = new jsb.Manifest(this.customManifestStr, this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
            console.log('Using custom manifest');
        }
    }

    /** 检查更新 - 回调 */
    private checkCb(event) {
        console.log('Code: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log("未找到本地清单文件，已跳过热更新。")
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log("无法下载清单文件，已跳过热更新。")
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("已经是最新的远程版本。")
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                console.log('新版本!!, please try to update. (' + this._am.getTotalBytes() + ')');
                setTimeout(() => {
                    this.hotUpdate();
                }, 100);
                break;
            default:
                return;
        }

        this._am.setEventCallback(null);
        this._updating = false;
    }

    /** 检查更新 */
    private checkUpdate() {
        if (this._updating) {
            console.log('检查更新中 ...');
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            let url = this.manifestUrl.nativeUrl;   // Resolve md5 url
            console.log("新包的 manifestUrl-uuid :", url);
            this._am.loadLocalManifest(url);
        }

        console.log(this._am.getLocalManifest(), this._am.getLocalManifest().isLoaded())

        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            console.log('未能加载本地清单...');
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));

        this._am.checkUpdate();
        this._updating = true;
    }

    /** 热更 - 回调  */
    private updateCb(event) {
        let needRestart = false;
        let failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log('未找到本地清单文件，已跳过热更新。');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                console.log("更新. 字节进度", event.getDownloadedBytes() + ' / ' + event.getTotalBytes(), +
                    "文件进度:", event.getDownloadedFiles() + ' / ' + event.getTotalFiles());

                let msg = event.getMessage();
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
            let searchPaths = jsb.fileUtils.getSearchPaths();
            let newPaths = this._am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift.apply(searchPaths, newPaths);

            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);

            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    }

    /** 热更 */
    private hotUpdate() {
        if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));

            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                // Resolve md5 url
                let url = this.manifestUrl.nativeUrl;
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
    }

    /** 重试热更 */
    retry() {
        if (!this._updating && this._canRetry) {
            this._canRetry = false;

            console.log('Retry failed Assets...');
            this._am.downloadFailedAssets();
        }
    }

}
