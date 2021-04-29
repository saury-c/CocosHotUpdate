/*
 * @Author: saury_c@foxmail.com
 * @Date: 2021-04-28 10:17:37
 * @Des: 
 * @Tips: 
 */

let fs = require('fs');
let path = require('path');
let crypto = require('crypto');
const fse = require('fs-extra');
let manifest = {
    packageUrl: `123/`,
    remoteManifestUrl: `123/test/project.manifest`,
    remoteVersionUrl: `123/test/version.manifest`,
    version: '1.0.0',
    env: "",
    assets: {},
    searchPaths: []
};

let dest = path.join(__dirname, '../../assets/scr/env/');
let src = path.join(__dirname, '../../build/jsb-link/');

function readDir(dir, obj) {
    let stat = fs.statSync(dir);
    if (!stat.isDirectory()) {
        return;
    }
    let subpaths = fs.readdirSync(dir), subpath, size, md5, compressed, relative;
    for (let i = 0; i < subpaths.length; ++i) {
        if (subpaths[i][0] === '.') {
            continue;
        }
        subpath = path.join(dir, subpaths[i]);
        stat = fs.statSync(subpath);
        if (stat.isDirectory()) {
            readDir(subpath, obj);
        }
        else if (stat.isFile()) {
            // Size in Bytes
            size = stat['size'];
            md5 = crypto.createHash('md5').update(fs.readFileSync(subpath)).digest('hex');
            compressed = path.extname(subpath).toLowerCase() === '.zip';

            relative = path.relative(src, subpath);
            relative = relative.replace(/\\/g, '/');
            relative = encodeURI(relative);

            obj[relative] = {
                'size': size,
                'md5': md5
            };
            if (compressed) {
                obj[relative].compressed = true;
            }
        }
    }
}

let mkdirSync = function (path) {
    try {
        fs.mkdirSync(path);
    } catch (e) {
        if (e.code != 'EEXIST') throw e;
    }
}

/**
 * template
 * projectManifest
 * proEnv
 * proVer
 * hotUpdateUrl
 * dayjs
 */
module.exports = function (item) {
    // manifest 修改赋值
    src = path.join(__dirname, `../../build/jsb-${item.template}`);
    manifest.packageUrl = `${item.hotUpdateUrl}`;
    manifest.remoteManifestUrl = `${item.hotUpdateUrl}/project.manifest`;
    manifest.remoteVersionUrl = `${item.hotUpdateUrl}/version.manifest`;
    manifest.version = item.proVer != null ? item.proVer : manifest.version;
    manifest.env = item.proEnv;
    manifest.buildTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

    // 修改(生成)项目内的 manifest
    let srcPath = path.join(src, 'src');
    let resPath = path.join(src, 'assets');
    readDir(srcPath, manifest.assets);
    readDir(resPath, manifest.assets);
    let destManifest = path.join(dest, 'project.manifest'); // 修改 manifest
    let destVersion = path.join(dest, 'version.manifest');
    mkdirSync(dest);
    fs.writeFileSync(destManifest, JSON.stringify(manifest));
    let temp = JSON.parse(JSON.stringify(manifest));    // 直接使用同一个对象会报错, 我也不知道为什么...
    delete temp.assets;
    delete temp.searchPaths;
    fs.writeFileSync(destVersion, JSON.stringify(temp));

    // 赋值到一个文件夹下
    let remoteAssetsPath = path.join(__dirname, `../../build/jsb-remote-assets`);
    fse.emptyDirSync(remoteAssetsPath); // 清空文件夹
    remoteAssetsPath = path.join(__dirname, `../../build/jsb-remote-assets`);
    fse.copySync(srcPath, `${remoteAssetsPath}/src`)
    fse.copySync(resPath, `${remoteAssetsPath}/assets`)
    fse.copySync(destManifest, `${remoteAssetsPath}/project.manifest`)
    fse.copySync(destVersion, `${remoteAssetsPath}/version.manifest`);
}
