---
sidebar_position: 2
description: 模型配置文件
---

# 模型配置文件

```yaml title="测试模型.yml"

Model:
  # 模型名，若手动修改请遵循[a-z0-9/._-]，同时也作为识别资源包内模型的重要特征
  Name: test
  # 自定义碰撞箱 (生成配置文件时插件会自动识别bb模型文件内HitBox大小)
  Hitbox:
    # 碰撞箱宽度
    Width: 2.375
    # 碰撞箱高度
    Height: 3.5625
  # 模型动作初始化默认动作，例如实体空闲时循环播放IDLE指定的动画，走路时播放Walk设置的动画
  Animation:
    Spawn: spawn
    Idle: idle
    Walk: walk
    Jump: jump
    Death: death
  # 模型NameTag偏移
  TagOffset:
    X: 0.0
    Y: 0.0
    Z: 0.0
```

如果使用指令``/oe resource bb``导出模型文件，插件将会自动使用Blockbench中设置的``File Name``小写转换后的字符串作为默认配置文件名以及模型名

**如果您手动修改``Name``请确保名字与资源包内的json文件与贴图文件夹名字相同，否则客户端无法注册模型，手动修改前请阅读[资源包说明](./resources)**

**手动修改``Name``时，请注意修改后的字符串务必遵循[a-z0-9/._-]格式，否则可能造成模型无法加载**

:::tip
Mod会自动加载动画Json内所有动画。配置文件内的Animation的配置仅是作为模型实体默认状态时自动播放的动画。
:::

:::tip 小提示
插件在加载时会自动遍历``OrangeEngine/model/blockbench``内的所有配置文件，因此您可以在该目录下放置多层文件夹对模型进行分类

同时插件**不会**对本目录下的配置文件名进行限制，您可以随意修改配置文件名作为相关标注，但配置文件内的``Name``请谨慎修改
:::
