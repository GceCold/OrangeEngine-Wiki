---
sidebar_position: 2
description: 盔甲模型
---

# 盔甲模型

## 使用模型

使用物品模型的绑定指令`/oe item bind [ModelName]`

## 配置文件

使用指令`/oe armor create [Name]`可生成初始配置文件，配置文件在`OrangeEngine/model/armor`内。

盔甲模型请将所有部位的盔甲放在同一个BlockBench模型文件内，Mod将根据配置文件中`ArmorBone`设置的对应组名自动处理模型可视部位。

`Animation`: 目前默认动画只提供了空闲状态的动画配置，可使用指令播放自定义动画

`GuiSetting`: 是用于玩家物品栏中模型渲染的调整，只是将不同部位的盔甲进行额外的处理。

```yaml
ArmorModel:
  Name: test
  ArmorBone:
    HeadBone: armorHead
    BodyBone: armorBody
    RightArmBone: armorRightArm
    LeftArmBone: armorLeftArm
    RightLegBone: armorRightLeg
    LeftLegBone: armorLeftLeg
    RightBootBone: armorRightBoot
    LeftBootBone: armorLeftBoot
  Animation:
    Idle: idle
  GuiSetting:
    Head:
      Scale:
        X: 1.0
        Y: 1.0
        Z: 1.0
      Translate:
        X: 0.0
        Y: 0.0
        Z: 0.0
      Rotate:
        X: 0.0
        Y: 0.0
        Z: 0.0
    Body:
      Scale:
        X: 1.0
        Y: 1.0
        Z: 1.0
      Translate:
        X: 0.0
        Y: 0.0
        Z: 0.0
      Rotate:
        X: 0.0
        Y: 0.0
        Z: 0.0
    Leg:
      Scale:
        X: 1.0
        Y: 1.0
        Z: 1.0
      Translate:
        X: 0.0
        Y: 0.0
        Z: 0.0
      Rotate:
        X: 0.0
        Y: 0.0
        Z: 0.0
    Feet:
      Scale:
        X: 1.0
        Y: 1.0
        Z: 1.0
      Translate:
        X: 0.0
        Y: 0.0
        Z: 0.0
      Rotate:
        X: 0.0
        Y: 0.0
        Z: 0.0
```