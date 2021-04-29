
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
exports.GAME_JUMP_TO_URL = exports.ENV_URL = exports.PROJECT_VER = exports.E_ENV_CONFIG = exports.PROJECT_ENV = void 0;
/** 当前项目开发环境 - 开发过程中, 可以使用本地存储来修改开发环境~ */
exports.PROJECT_ENV = "DEV";
/** 项目所有的生产环境 */
var E_ENV_CONFIG;
(function (E_ENV_CONFIG) {
    E_ENV_CONFIG["DEV"] = "DEV";
    E_ENV_CONFIG["TEST"] = "TEST";
    E_ENV_CONFIG["PROD"] = "PROD";
})(E_ENV_CONFIG = exports.E_ENV_CONFIG || (exports.E_ENV_CONFIG = {}));
/** 各环境的版本号, 打包时会自己修改 - 这个使用枚举的变量, 放在最顶部!!! 用于正则匹配第一项 */
exports.PROJECT_VER = (_a = {},
    _a[E_ENV_CONFIG.DEV] = "1.0.2",
    _a[E_ENV_CONFIG.TEST] = "1.1.1",
    _a[E_ENV_CONFIG.PROD] = "1.0.0",
    _a);
/** 配置 - http请求的url地址 */
var CFG_ENV_URL = (_b = {},
    _b[E_ENV_CONFIG.DEV] = "http://192.168.1.180:8001",
    _b[E_ENV_CONFIG.TEST] = "http://192.168.1.180:8001",
    _b[E_ENV_CONFIG.PROD] = "http://192.168.1.180:8001",
    _b);
/** 配置 - 跳转url */
var CFG_GAME_JUMP_TO_URL = (_c = {},
    _c[E_ENV_CONFIG.DEV] = "https://192.168.1.180:8001/",
    _c[E_ENV_CONFIG.TEST] = "https://192.168.1.180:8001/",
    _c[E_ENV_CONFIG.PROD] = "https://192.168.1.180:8001/",
    _c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyXFxlbnZcXEJ1aWxkQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7R0FRRzs7OztBQUdILHlDQUF5QztBQUM1QixRQUFBLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFFakMsZ0JBQWdCO0FBQ2hCLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUNwQiwyQkFBVyxDQUFBO0lBQ1gsNkJBQWEsQ0FBQTtJQUNiLDZCQUFhLENBQUE7QUFDakIsQ0FBQyxFQUpXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBSXZCO0FBRUQsd0RBQXdEO0FBQzNDLFFBQUEsV0FBVztJQUNwQixHQUFDLFlBQVksQ0FBQyxHQUFHLElBQUcsT0FBTztJQUMzQixHQUFDLFlBQVksQ0FBQyxJQUFJLElBQUcsT0FBTztJQUM1QixHQUFDLFlBQVksQ0FBQyxJQUFJLElBQUcsT0FBTztRQUMvQjtBQUVELHdCQUF3QjtBQUN4QixJQUFNLFdBQVc7SUFDYixHQUFDLFlBQVksQ0FBQyxHQUFHLElBQUcsMkJBQTJCO0lBQy9DLEdBQUMsWUFBWSxDQUFDLElBQUksSUFBRywyQkFBMkI7SUFDaEQsR0FBQyxZQUFZLENBQUMsSUFBSSxJQUFHLDJCQUEyQjtPQUNuRCxDQUFBO0FBRUQsaUJBQWlCO0FBQ2pCLElBQU0sb0JBQW9CO0lBQ3RCLEdBQUMsWUFBWSxDQUFDLEdBQUcsSUFBRyw2QkFBNkI7SUFDakQsR0FBQyxZQUFZLENBQUMsSUFBSSxJQUFHLDZCQUE2QjtJQUNsRCxHQUFDLFlBQVksQ0FBQyxJQUFJLElBQUcsNkJBQTZCO09BQ3JELENBQUE7QUFFRCxnQkFBZ0I7QUFDSCxRQUFBLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBRXZDLFlBQVk7QUFDQyxRQUFBLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNhdXJ5XHJcbiAqIEBEYXRlOiAyMDIxLTA0LTI3IDEwOjU0OjAxXHJcbiAqIEBEZXM6IOaehOW7uuaJgOS9v+eUqOeahOeOr+Wig1xyXG4gKiBAVGlwczogXHJcbiAqICAtIOmUruWAvOS4jeimgeS/ruaUuSwg5aaC5p6c6ZyA6KaB5L+u5pS555qE6K+dLCBtYWluLmpzIOWGheeahCBrZXkg5YC85Lmf6ZyA6KaB5L+u5pS5XHJcbiAqICAtIOmZpOS6huW8gOWPkeeOr+Wig+WPr+S7peWcqOS7o+eggeWGheS/ruaUuSwg5YW25LuW55qE6YCJ6aG55Lya5Zyo5omT5YyF5pe26Ieq5bex5L+u5pS5KOaJgOS7peS4jeW7uuiuruW8gOWPkeiAheiHquW3seaJi+WKqOS/ruaUuSlcclxuICogIC0g5omT5YyF5Y+Y6YeP5YC85aGr6ZSZ5pe2IG9yIOWPmOmHj+WAvOS5seaUuSwg6YO95Lya5b2x5ZON5q2j5YiZ5Yy56YWNICjmiJHmiorlhajljLnphY3lhbPkuoYsIOWPquimgeS4jeS/ruaUuei/meWHoOS4quaemuS4vuebuOWFs+eahOWPmOmHj+mhuuW6j+WwseihjCwg6L+Z5qC35bCx5LiN5Lya5b2x5ZON5q2j5YiZ5Yy56YWNKVxyXG4gKi9cclxuXHJcblxyXG4vKiog5b2T5YmN6aG555uu5byA5Y+R546v5aKDIC0g5byA5Y+R6L+H56iL5LitLCDlj6/ku6Xkvb/nlKjmnKzlnLDlrZjlgqjmnaXkv67mlLnlvIDlj5Hnjq/looN+ICovXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUX0VOViA9IFwiREVWXCI7XHJcblxyXG4vKiog6aG555uu5omA5pyJ55qE55Sf5Lqn546v5aKDICovXHJcbmV4cG9ydCBlbnVtIEVfRU5WX0NPTkZJRyB7XHJcbiAgICBERVYgPSBcIkRFVlwiLCAgICAvLyDlvIDlj5HogIXoh6rlt7HmiZPnmoTljIVcclxuICAgIFRFU1QgPSBcIlRFU1RcIiwgIC8vIOaJk+e7mea1i+ivleeahOWMhVxyXG4gICAgUFJPRCA9IFwiUFJPRFwiLCAgLy8g5q2j5byP5YyFXHJcbn1cclxuXHJcbi8qKiDlkITnjq/looPnmoTniYjmnKzlj7csIOaJk+WMheaXtuS8muiHquW3seS/ruaUuSAtIOi/meS4quS9v+eUqOaemuS4vueahOWPmOmHjywg5pS+5Zyo5pyA6aG26YOoISEhIOeUqOS6juato+WImeWMuemFjeesrOS4gOmhuSAqL1xyXG5leHBvcnQgY29uc3QgUFJPSkVDVF9WRVIgPSB7XHJcbiAgICBbRV9FTlZfQ09ORklHLkRFVl06IFwiMS4wLjJcIixcclxuICAgIFtFX0VOVl9DT05GSUcuVEVTVF06IFwiMS4xLjFcIixcclxuICAgIFtFX0VOVl9DT05GSUcuUFJPRF06IFwiMS4wLjBcIixcclxufVxyXG5cclxuLyoqIOmFjee9riAtIGh0dHDor7fmsYLnmoR1cmzlnLDlnYAgKi9cclxuY29uc3QgQ0ZHX0VOVl9VUkwgPSB7XHJcbiAgICBbRV9FTlZfQ09ORklHLkRFVl06IFwiaHR0cDovLzE5Mi4xNjguMS4xODA6ODAwMVwiLFxyXG4gICAgW0VfRU5WX0NPTkZJRy5URVNUXTogXCJodHRwOi8vMTkyLjE2OC4xLjE4MDo4MDAxXCIsXHJcbiAgICBbRV9FTlZfQ09ORklHLlBST0RdOiBcImh0dHA6Ly8xOTIuMTY4LjEuMTgwOjgwMDFcIixcclxufVxyXG5cclxuLyoqIOmFjee9riAtIOi3s+i9rHVybCAqL1xyXG5jb25zdCBDRkdfR0FNRV9KVU1QX1RPX1VSTCA9IHtcclxuICAgIFtFX0VOVl9DT05GSUcuREVWXTogXCJodHRwczovLzE5Mi4xNjguMS4xODA6ODAwMS9cIixcclxuICAgIFtFX0VOVl9DT05GSUcuVEVTVF06IFwiaHR0cHM6Ly8xOTIuMTY4LjEuMTgwOjgwMDEvXCIsXHJcbiAgICBbRV9FTlZfQ09ORklHLlBST0RdOiBcImh0dHBzOi8vMTkyLjE2OC4xLjE4MDo4MDAxL1wiLFxyXG59XHJcblxyXG4vKiogaHR0cOivt+axgnVybCAqL1xyXG5leHBvcnQgY29uc3QgRU5WX1VSTCA9IENGR19FTlZfVVJMLkRFVjtcclxuXHJcbi8qKiDot7Povax1cmwgKi9cclxuZXhwb3J0IGNvbnN0IEdBTUVfSlVNUF9UT19VUkwgPSBDRkdfR0FNRV9KVU1QX1RPX1VSTC5ERVY7Il19