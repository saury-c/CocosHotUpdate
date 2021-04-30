/*
 * @Author: saury_c@foxmail.com
 * @Date: 2021-04-29 11:24:06
 * @Des: 热更url - 插件包导 ts 代码有问题, 暂时用 js 来写
 * @Tips: 
 */

let EnvConfig;
(function (temp) {
    temp[temp["DEV"] = "DEV"] = "DEV";
    temp[temp["TEST"] = "TEST"] = "TEST";
    temp[temp["PROD"] = "PROD"] = "PROD";
})(EnvConfig || (EnvConfig = {}));

const HotUpdateUrl = "http://192.168.1.180:8001";

module.exports = {
    EnvConfig,
    HotUpdateUrl,
}