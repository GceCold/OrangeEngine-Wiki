---
sidebar_position: 3
description: 资源包说明
---

# 资源包

## 目录结构

```
└─ plugins
   └─ OrangeEngine
      └─ resources         <-  导出资源包
         ├─ pack.mcmeta
         └─ assets
            └─ orangeengine         <-  资源包命名空间不能修改
               ├─ animations        <-  动画文件存储位置
               ├─ custom_models     <-  模型文件存储位置
               └─ textures          <-  贴图文件存储位置
```

## 文件说明

模型文件以``模型名.json``命名

动画文件以``模型名.animation.json``命名

贴图文件以``模型名/xxx.png``命名

**模型名为``OrangeEngine/model``内对应模型配置文件中的``Name``项设置的名称**

导出的模型文件为OrangeEngine专用文件同时会有根据每个服务器不同的加密，故模型json被恶意偷取后同样无法使用和无法转换。

## 模型名修改

1. 在``OrangeEngine/model``找到对应模型配置文件
2. 修改模型配置文件中``Name``项，修改为目标名称
3. 进入``OrangeEngine/resources/orangeengine/custom_models``中找到对应的模型配置文件，修改名称为``目标名称.json``
4. 进入``OrangeEngine/resources/orangeengine/animations``中找到对应的动画配置文件，修改名称为``目标名称.animation.json``
5. 进入``OrangeEngine/resources/orangeengine/textures``中找到对应的**文件夹**，修改名称为``模型名``
6. 打包进资源包，替换客户端资源包
7. 使用``/oe reload``重载配置

:::warning 注意
请确保您的目标名称遵循``[a-z0-9/._-]``规则
:::