---
sidebar_position: 1
description: 物品模型
---

# 物品模型

:::warning 注意
目前仅在Forge1.18.2版本的Mod中进行测试
:::

# 配置文件

使用指令`/oe item create [Name]`可生成初始配置文件，配置文件在`OrangeEngine/model/item`内。

```yaml
ItemModel:
  Name: test
  Animation:
    Idle: idle
    Interact: interact
    Use: use
  Gui:
    Scale:
      X: 0.5
      Y: 0.5
      Z: 0.5
    Translate:
      X: 0.0
      Y: 0.0
      Z: 0.0
    Rotate:
      X: 0.0
      Y: 0.0
      Z: 0.0
```

`Name` : 使用的模型名

`Animation` : `Idle`为默认空闲动画，在左右手交互时播放`Interact`中设置的动画，在例如弓箭、弩的右键拉弓时会播放动画`Use`。
当玩家拉弓保持不动时会播放名为`Use`加`_static`的动画，例如 use_static

`Gui`: 这里的缩放 旋转 偏移用于玩家物品栏中模型物品的渲染效果

# 使用模型

使用指令`/oe item bind [ModelName]`即可为主手中的模型绑定物品模型

# 播放其他动画

使用指令`/oe item play [AnimationName] [main/off]` 选择玩家主/副手中的物品播放指定动画