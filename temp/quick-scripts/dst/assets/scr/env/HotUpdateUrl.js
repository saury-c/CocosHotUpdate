
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