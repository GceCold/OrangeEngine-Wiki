---
sidebar_position: 3
description: 插件指令
---

# 插件指令

## 所有指令

```
/oe npc             CitizensNPC实体相关操作 (需要安装附属插件)
   => /oe npc trait [ModeName] [Id]                 为NPC绑定模型
   => /oe npc play [AnimationName]                  指定NPC播放模型动画
   => /oe npc play [AnimationName] [Id]             指定ID的NPC播放动画
   => /oe npc play [AnimationName] [Player]         指定玩家播放NPC模型动画
   => /oe npc play [AnimationName] [Player] [Id]    指定玩家播放NPC动画
/oe resource        资源相关操作
   => /oe resource bb                  将bb文件转换为OrangeEngine的json模型
/oe model           模型相关操作
   => /oe model list                   列出已加载模型列表
/oe player          玩家模型操作
   => /oe player create [ModelName]    生成玩家模型示例配置文件
   => /oe player bind [ModelName]    绑定玩家模型
/oe reload          重载所有配置文件
```

## 资源操作

```
/oe resource                           资源操作
   => /oe resource bb                  将bb文件转换为OrangeEngine的json模型
```
:::tip 小提示
``/oe resource bb``将自动将遍历``OrangeEngine/blockbench``内所有文件夹的``.bbmodel``文件，因此您可以在该目录下放置多层文件夹对模型进行分类
:::

:::warning 注意
请确保您的模型文件在Blockbench中的``File Name``设置的名称遵循``[a-zA-Z0-9/._-]``规则，外部bb文件名可随意设置

例：Blockbench中设置``File Name``为"Test_Model"，但bb文件名可设置为"测试模型.bbmodel"。

导出时插件会自动在``OrangeEngine/model``内生成模型配置``test_model.yml``，配置内的``Name``为"test_model"
:::

导出后的模型将自动存放于``OrangeEngine/resources/assets/orangeengine``内，更多详细可查看[资源包说明](./../entity-model/resources)
