/*
 * @Author: saury
 * @Date: 2021-04-26 18:49:41
 * @Des: 构建使用的扩展包
 * @Tips: 这些枚举与 BuildConfig.ts 内相对应
 */

// enum - env
let E_ENV_CONFIG;
(function (temp) {
    temp[temp["DEV"] = "DEV"] = "DEV";
    temp[temp["TEST"] = "TEST"] = "TEST";
    temp[temp["PROD"] = "PROD"] = "PROD";
})(E_ENV_CONFIG || (E_ENV_CONFIG = {}));

// enum - 热更url
const HOT_UPDATE_URL = require("./../../assets/scr/env/HotUpdateUrl");

'use strict';

const path = require('path');
const fs = require('fs');
const dayjs = require('./dayjs.js');
const initVersion = require('./version_generator');

// 项目名, 项目环境, 项目版本
let proName,
    proEnv,
    proVer;

function onBuildStart(options, callback) {
    // 读取参数
    Editor.log("build - start", dayjs().format('YYYY-MM-DD HH:mm:ss'), options);
    let buildParam = options.title.split("---") || [];
    let projectName = buildParam[0] || "undefined_name";
    let projectEnv = buildParam[1] || "DEV";
    let projectVersion = buildParam[2] != null ? buildParam[2].replace(/_/g, ".") : "0.0.1";
    Editor.log("developer param:", buildParam, "\t\toutput:", projectName, projectEnv, projectVersion);

    // 赋值
    proName = projectName;
    proEnv = projectEnv;
    proVer = projectVersion;

    // 读取文本
    let configPath = path.join(__dirname, './../../assets/scr/env/BuildConfig.ts');
    var configText = fs.readFileSync(configPath, 'utf8');
    Editor.log("-------------------未修改前的文本:", configText);
    // 修改生产环境
    let arr = configText.match(/export const PROJECT_ENV =.*?;/);
    configText = configText.replace(arr[0], `export const PROJECT_ENV = "${proEnv}";`);
    // 修改对应生产环境和版本号
    let reg = new RegExp(`\\[E_ENV_CONFIG.${E_ENV_CONFIG[proEnv]}]:.*?,`, "g");  // TODO 这里全匹配未按照我的预期来走,我要匹配这个 [E_ENV_CONFIG.DEV]: "1.0.0" , 但是输入有问题 new RegExp(`\\[E_ENV_CONFIG.${E_ENV_CONFIG[proEnv]}]:\s.\d.*?,`, "g")
    arr = configText.match(reg);
    configText = configText.replace(arr[0], `[E_ENV_CONFIG.${E_ENV_CONFIG[proEnv]}]: "${projectVersion}",`);
    // 修改http-url
    arr = configText.match(/export const ENV_URL =.*?;/);
    configText = configText.replace(arr[0], `export const ENV_URL = CFG_ENV_URL.${proEnv};`);
    // 修改跳转url
    arr = configText.match(/export const GAME_JUMP_TO_URL =.*?;/);
    configText = configText.replace(arr[0], `export const GAME_JUMP_TO_URL = CFG_GAME_JUMP_TO_URL.${proEnv};`); // 修改生产环境
    // 修改文本
    fs.writeFileSync(configPath, configText);
    Editor.log("-------------------修改后的文本", configText);

    // everything is ok
    callback();
}

function onBuilding(options, callback) {
    Editor.log("build - building", dayjs().format('YYYY-MM-DD HH:mm:ss'), options);

    // everything is ok
    callback();
}

function onBuildFinish(options, callback) {
    Editor.log("build - finish", dayjs().format('YYYY-MM-DD HH:mm:ss'), options);

    // 调用函数生成 manifest
    var prefabUuid = Editor.assetdb.urlToUuid("db://assets/scr/env/project.manifest");
    initVersion({
        template: options.template,
        projectManifest: prefabUuid,    //  重写 uuid - 我感觉没必要, 反正都构建两遍
        hotUpdateUrl: HOT_UPDATE_URL,
        proEnv,
        proVer,
        dayjs,
    });

    // everything is ok
    callback();

    Editor.log(proName, "构建完成, 牛皮👍")
}

module.exports = {

    // 当 package 被正确加载的时候执行
    load: function () {
        Editor.Builder.on('build-start', onBuildStart);  // 构建开始时触发
        Editor.Builder.on('before-change-files', onBuilding);  // 在构建结束 之前 触发，此时除了计算文件 MD5、生成 settings.js、原生平台的加密脚本以外，大部分构建操作都已执行完毕。我们通常会在这个事件中对已经构建好的文件做进一步处理
        Editor.Builder.on('build-finished', onBuildFinish);  // 构建完全结束时触发
    },

    // 当 package 被正确卸载的时候执行
    unload: function () {
        Editor.Builder.removeListener('build-start', onBuildStart);
        Editor.Builder.removeListener('before-change-files', onBuilding);
        Editor.Builder.removeListener('build-finished', onBuildFinish);
    },

    messages: {
    }
};
