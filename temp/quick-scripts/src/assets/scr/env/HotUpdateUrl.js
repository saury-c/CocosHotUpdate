"use strict";
cc._RF.push(module, '765f7/GVMNAQqX7zySu9ZcY', 'HotUpdateUrl');
// scr/env/HotUpdateUrl.js

"use strict";

/*
 * @Author: saury_c@foxmail.com
 * @Date: 2021-04-29 11:24:06
 * @Des: 热更url - 插件包导 ts 代码有问题, 暂时用 js 来写
 * @Tips: 
 */
var E_ENV_CONFIG;

(function (temp) {
  temp[temp["DEV"] = "DEV"] = "DEV";
  temp[temp["TEST"] = "TEST"] = "TEST";
  temp[temp["PROD"] = "PROD"] = "PROD";
})(E_ENV_CONFIG || (E_ENV_CONFIG = {}));

var HotUpdateUrl = "http://192.168.1.180:8001";
module.exports = {
  HotUpdateUrl: HotUpdateUrl,
  E_ENV_CONFIG: E_ENV_CONFIG
};

cc._RF.pop();