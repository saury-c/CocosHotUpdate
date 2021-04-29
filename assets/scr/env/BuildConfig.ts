/*
 * @Author: saury
 * @Date: 2021-04-27 10:54:01
 * @Des: 构建所使用的环境
 * @Tips: 
 *  - 键值不要修改, 如果需要修改的话, main.js 内的 key 值也需要修改
 *  - 除了开发环境可以在代码内修改, 其他的选项会在打包时自己修改(所以不建议开发者自己手动修改)
 *  - 打包变量值填错时 or 变量值乱改, 都会影响正则匹配 (我把全匹配关了, 只要不修改这几个枚举相关的变量顺序就行, 这样就不会影响正则匹配)
 */


/** 当前项目开发环境 - 开发过程中, 可以使用本地存储来修改开发环境~ */
export const PROJECT_ENV = "DEV";

/** 项目所有的生产环境 */
export enum E_ENV_CONFIG {
    DEV = "DEV",    // 开发者自己打的包
    TEST = "TEST",  // 打给测试的包
    PROD = "PROD",  // 正式包
}

/** 各环境的版本号, 打包时会自己修改 - 这个使用枚举的变量, 放在最顶部!!! 用于正则匹配第一项 */
export const PROJECT_VER = {
    [E_ENV_CONFIG.DEV]: "1.0.2",
    [E_ENV_CONFIG.TEST]: "1.1.1",
    [E_ENV_CONFIG.PROD]: "1.0.0",
}

/** 配置 - http请求的url地址 */
const CFG_ENV_URL = {
    [E_ENV_CONFIG.DEV]: "http://192.168.1.180:8001",
    [E_ENV_CONFIG.TEST]: "http://192.168.1.180:8001",
    [E_ENV_CONFIG.PROD]: "http://192.168.1.180:8001",
}

/** 配置 - 跳转url */
const CFG_GAME_JUMP_TO_URL = {
    [E_ENV_CONFIG.DEV]: "https://192.168.1.180:8001/",
    [E_ENV_CONFIG.TEST]: "https://192.168.1.180:8001/",
    [E_ENV_CONFIG.PROD]: "https://192.168.1.180:8001/",
}

/** http请求url */
export const ENV_URL = CFG_ENV_URL.DEV;

/** 跳转url */
export const GAME_JUMP_TO_URL = CFG_GAME_JUMP_TO_URL.DEV;