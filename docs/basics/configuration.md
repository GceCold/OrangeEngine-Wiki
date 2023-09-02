---
sidebar_position: 2
description: 部分功能配置文件
---

# 基础配置文件

## 插件目录结构

插件配置目录结构

```
└─ plugins
   └─ OrangeEngine
      ├─ blockbench               <-  存放待转换Blockbench模型
      │  └─ 模型.bbmodel
      ├─ model                    <-  模型配置文件
      │  ├─ blockbench            <-  所有模型文件基本配置
      │  │  └─ 模型名.yml 
      │  └─ player                <-  玩家模型配置 (可通过指令生成模板配置文件)
      │     └─ 模型名.yml 
      ├─ resources                <-  导出模型存储位置
      ├─ data                     <-  插件内部数据缓存 (请勿随意修改)
      ├─ lang                     <-  语言配置
      ├─ config.yml               <-  基础配置文件
      ├─ entity.yml               <-  根据生物名与生物类型替换模型配置文件
      └─ animations.yml           <-  服务器动态加载动画配置文件
```

## config.yml

```yaml title="config.yml"
server:
  # 用来请求节点列表，不懂请勿修改
  dns: "119.29.29.29"
  # 默认节点选择 留空自动选择
  # 填写示例 如果选择节点2作为默认节点请填入 "2"
  default: ""

# 官网注册邮箱
user: ""
# 使用码
code: ""
# 语言
language: "zh-CN"
# 是否启动服务器生物碰撞箱替换
hitbox: false
```

### 验证服务器配置

#### DNS

如果插件无法获取服务器节点，可尝试修改``dns``项 尝试修改为类似``114.114.114.114`` ``223.5.5.5`` ``119.29.29.29``等dns服务器

如果以上均无法获取，请在确保服务器能够正常``ping baidu.com``并返回IP地址的情况下，查看服务器设置的默认dns并填入本配置内

#### 默认服务器

在您启动多次后，如果您服务器能够长时间稳定连接某一节点服务器，您可以手动设置该节点为您的默认验证服务器。留空将自动选择延迟较低的节点服务器。

> 填写示例 如果选择节点2作为默认节点请填入 "2"

### 用户信息

在首次生成插件配置文件后，您需要在``user``内填写您官网注册邮箱，在``code``内填写插件使用码，如果丢失可通过官网查询。

### 碰撞箱

OrangeEngine默认仅在客户端修改生物碰撞箱，但这可能会导致部分较大碰撞箱模型生物进入较小的地方，这是因为在服务器中该生物依旧为原生物碰撞箱大小。如果您需要生物AI不会进入不应进入的位置，您可以将``hitbox``设置为``true``


## entity.yml

自动替换模型配置文件

```yaml title="entity.yml"
ReplaceEntity:
  Type:
    ZOMBIE:
      Model: "test_model"
  Name:
    测试:
      Model: "test"
```

### 根据生物类型自动替换模型

Mod可以根据该文件中的设置自动将世界中的对应生物类型替换为目标模型。

您可以在[Spigot JavaDoc](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)中找到所有可替换的生物类型。

### 根据生物名称自动替换模型

Mod可以根据该文件中的设置自动将生物名称中**包含**设置名称的生物自动替换为目标模型。

## animations.yml

服务器动态动画文件

您可以将部分动画拆分为独立的动画文件。对于**DynamicAnimation**中的配置动画，只需把它们只放置在服务器中（无需包含在资源包），在玩家进入服务器后自动为对应模型补充设置的动画。对于**AdditionalAnimation**中的配置，需要将它们放置在资源包中，服主可自行选择附加动画位置。

```yaml title="animations.yml"
DynamicAnimation:
  ModelName_1:
    - AnimationFileName_1
    - AnimationFileName_2
  ModelName_2:
    - AnimationFileName_2

# 以下动画文件需要包含在本地资源包中
AdditionalAnimation:
  ModelName_1:
    - AnimationFileName_1
    - AnimationFileName_2
```

``ModelName_1`` 目标模型

``AnimationFileName_1`` 需要动态加载的动画文件，需要由OrangeEngine生成(/or resource bb)。

请将生成后位于``OrangeEngine/resources/assets/orangeengine/animations``中的动画文件复制到``OrangeEngine/animation``。

:::danger 注意
请保持文件以**.animation.oe**结尾，在配置文件中无需填写``.animation.oe``

例: 文件名为``player_test.animation.oe``，则在配置文件中只需要填写``player_test``
:::

