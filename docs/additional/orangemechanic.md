---
sidebar_position: 1
description: MythicMobs和CitizensNPC扩展
---

# OrangeMechanic

OrangeMechanic是为OrangeEngine兼容MythicMobs和CitizensNPC的附属插件，可在群文件内下载。

仅兼容MythicMobs v5.

## MythicMobs扩展

### 已兼容的ModelEngine标签

✔️ 已兼容

❌ 未兼容

----

#### Mechanics

✔️ Model

为生物绑定模型。

| 属性      | 别名          | 说明                                 | 默认  |
| --------- | ------------- | ------------------------------------ | ----- |
| modelid   | m, mid, model | 模型名                               |       |
| hitbox    | h             | 是否替换生物碰撞箱为配置文件中的设置 | true  |
| nametag   | n, name       | 是否显示生物名字标签                 | true  |
| lockpitch | lp, lpitch    | 锁定头部俯仰角                       | false |
| lockyaw   | ly, lyaw      | 锁定头部偏航角                       | false |
| remove    | r             | 是否移除模型                         | false |
| invisible | i, invis      | 设置实体是否不可见                   | false |

---

✔️ State

模型播放动画。

identifier说明: 

编号0动画控制器会处理idle、walk等默认动画，向控制器设置播放指定动画时，编号0控制器会先播放所添加的动画，待所有添加的动画播放完毕后恢复默认动画。在玩家动画控制器中对应上半身控制器。

编号1动画处理器在没有添加动画时保持空闲状态。在玩家动画控制器中对应下半身控制器。

| 属性    | 别名          | 说明                                             | 默认  |
| ------- | ------------- | ------------------------------------------------ | ----- |
| modelid | m, mid, model | 模型名                                           |       |
| state   | h             | 动画名                                           |       |
| now     | n             | 是否立即播放(替换当前播放动作，同时清空播放列表) | flase |
| transition     | t      | 动画间过度时长 (Tick)                            | 10 |
| identifier     | i      | 编号0/编号1 用于怪物模型多动作叠加                 | 0 |

---

✔️ MountModel

将乘客实体安装到指定的骨骼上。

| 属性  | 别名 | 说明                                                     | 默认    |
| ----- | ---- | -------------------------------------------------------- | ------- |
| mode  | m    | Walking / Flying                                         | Walking |
| pbone | p    | 设置座位骨骼，默认为mount  格式: pbone=seat1,seat2,seat3 |         |

---

✔️ DismountModel

从模型上卸下目标。

| 属性  | 别名 | 说明                          | 默认 |
| ----- | ---- | ----------------------------- | ---- |
| pbone | p    | 格式: pbone=seat1,seat2,seat3 |      |

---

✔️ DismountAll

卸下模型上的所有乘客。

| 属性  | 别名 | 说明                          | 默认 |
| ----- | ---- | ----------------------------- | ---- |
| pbone | p    | 格式: pbone=seat1,seat2,seat3 |      |

---

✔️ Tint

将模型的某些骨骼贴图着色修改为设置内容。

| 属性    | 别名          | 说明                                                              | 默认   |
| ------- | ------------- | ----------------------------------------------------------------- | ------ |
| modelid | m, mid, model | 模型名                                                            |        |
| partid  | p, pid, part  | 骨骼名                                                            |        |
| color   | c             | 十六进制RGB/RGBA颜色，支持调整透明度 例如：``FFFFFF``/``#FFFFFF`` | FFFFFF |

---

✔️ SwapModel

更换实体模型。

| 属性       | 别名          | 说明   | 默认 |
| ---------- | ------------- | ------ | ---- |
| modelid    | m, mid, model | 模型名 |      |
| newmodelid | p, pid, part  | 新模型 |      |

---

✔️ ChangePart

设置骨骼以显示来自其他模型的骨骼。 这不会改变骨骼的位置，只会在视觉上改变模型。

| 属性       | 别名              | 说明             | 默认 |
| ---------- | ----------------- | ---------------- | ---- |
| modelid    | m, mid, model     | 模型名           |      |
| partid     | p, pid, part      | 被替换目标骨骼   |      |
| newmodelid | p, pid, part      | 新模型           |      |
| newpartid  | np, npid, newpart | 欲替换的目标骨骼 |      |

---

✔️ SubModel

向目标模型添加或删除不同模型的一部分。

| 属性       | 别名                     | 说明                 | 默认 |
| ---------- | ------------------------ | -------------------- | ---- |
| modelid    | m, mid, model            | 模型名               |      |
| partid     | p, pid, part             | 被替换目标骨骼       |      |
| submodelid | delid	sm, smid, submodel | 欲添加的子模型       |      |
| subpartid  | sp, spid, subpart        | 欲添加的子模型部分   |      |
| remove     | r                        | 是否为删除子模型骨骼 |      |

---

✔️ Petrify

创建模型的雕像，此模型将不再能够更改或移动。

| 属性    | 别名          | 说明   | 默认 |
| ------- | ------------- | ------ | ---- |
| modelid | m, mid, model | 模型名 |      |

---

✔️ DefaultState

| 属性    | 别名          | 说明                                    | 默认 |
| ------- | ------------- | --------------------------------------- | ---- |
| modelid | m, mid, model | 模型名                                  |      |
| type    | t             | 动作类型。类型：IDLE, WALK, JUMP, DEATH |      |
| state   | s             | 动画名                                  |      |

---

✔️ SetModelTag

设置模型名称标签上显示的名称。

| 属性    | 别名 | 说明               | 默认 |
| ------- | ---- | ------------------ | ---- |
| tag     | t    | 名称或占位符字符串 |      |
| visible | v    | 名称标签的是否可见 | true |

---

✔️ SetModelTagVisible

设置模型名称标签的可见性。

| 属性    | 别名 | 说明               | 默认 |
| ------- | ---- | ------------------ | ---- |
| tag     | t    | 名称或占位符字符串 |      |
| visible | v    | 名称标签的是否可见 | true |

---

✔️ Disguise

给目标玩家绑定模型

| 属性    | 别名          | 说明   | 默认 |
| ------- | ------------- | ------ | ---- |
| modelid | m, mid, model | 模型名 |      |

---

✔️ Undisguise

移除目标玩家绑定的模型

| 属性 | 别名 | 说明 | 默认 |
| ---- | ---- | ---- | ---- |

---

✔️ LockHead

锁定模型的俯仰和偏航旋转。

| 属性      | 别名       | 说明           | 默认  |
| --------- | ---------- | -------------- | ----- |
| lockpitch | lp, lpitch | 锁定头部俯仰角 | false |
| lockyaw   | ly, lyaw   | 锁定头部偏航角 | false |

---

❌✔️ ChangeParent

强制模型的一部分成为另一部分的子骨骼。 这不会创建任何新零件。

该部分仍将使用其旧父级的偏移量。

:::warning 注意
未能完全复现ModelEngine原始功能，存在部分问题
:::

| 属性       | 别名                     | 说明                 | 默认 |
| ---------- | ------------------------ | -------------------- | ---- |
| modelid    | m, mid, model            | 模型名               |      |
| partid     | p, pid, part             | 被替换目标骨骼       |      |
| newmodelid | nm, nmid, newmodel       | 欲替换的子模型       |      |
| newpartid  | np, npid, newpart        | 欲替换的子模型部分   |      |

---

✔️ PartVisibility

设置模型一部分的可见性。 这不会删除或添加任何部分。

| 属性       | 别名          | 说明         | 默认 |
| ---------- | ------------- | ------------ | ---- |
| modelid    | m, mid, model | 模型名       |      |
| partid     | p, pid, part  | 目标骨骼     |      |
| visibility | v, visible    | 骨骼是否可见 | true |

---

#### Targeters

✔️ ModelPart

获取骨骼位置

| 属性    | 别名          | 说明     | 默认 |
| ------- | ------------- | -------- | ---- |
| modelid | m, mid, model | 模型名   |      |
| partid  | p, pid, part  | 目标骨骼 |      |
| x       |               | x轴偏移  | 0    |
| y       |               | y轴偏移  | 0    |
| z       |               | z轴偏移  | 0    |
