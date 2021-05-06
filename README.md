# 使用说明

<br>

### 拷贝文件进自己项目

- [热更脚本： ./assets/scr/env](./assets/scr/env)

- [构建模板: ./build-templates/jsb-link](./build-templates/jsb-link)

- [构建扩展包: ./packages/build_env](./packages/build_env)


<br>

### 修改对应文件配置

- 热更地址相关

    - 在 [HotUpdateUrl](assets/scr/env/HotUpdateUrl.js) 内修改 热更/资源地址`(HotUpdateUrl)` ， 如果热更地址和资源上传地址想分开使用， 请自行修改脚本(建议新增变量来控制)

    - 当前脚本路径引用为 `assets/scr/env`， 如果不对， 请自行修改， 这个非常重要！！！

<br>

### 构建流程

> 方式一：

 - 构建规范

    - 构建命名

        - projectname---evn---versionnumber 

        - 举例：helloWorld---test---1_0_0，  将会构建名字为 helloWorld 的 test 包， 其版本号为 1.0.0

    - 构建模板选择 android 下的 link

    - 请不要勾选 MD5 Cache， 否则将会影响热更的资源比较

 - 1 进行第一次构建

 - 2 重新构建

 - 3 运行项目即可看到热更

```
  白话解释一遍

 0 构建模板 build-templates/main.js 插入了一段热更代码

 0 扩展包主要是用来构建热更版本文件 manifest， 目录： packages/build_env

 1 构建文件 - 之后会根据 环境 + 版本号 自动生成 manifest， 

 2 重新构建 （因为 manifest 修改了， 项目的资源需要重新构建来引用这个新的 manifest)

 tips:  这里可以插一个上传资源的步骤， 所有资源放在了 build/jsb-remote-assets

 3 运行项目会自己调用热更 - 如果需要控制热更流程， 请自行修改 `HotUpdate.ts` 脚本
```

<br>

> 方式二：

    - 打开构建面板, 填好对应参数

    - 运行项目根目录 build.bat 即可. (需要脚本正确使用引擎版本和项目路径)

    - 参考文档：https://docs.cocos.com/creator/manual/zh/publish/publish-in-command-line.html


