import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '多版本兼容',
    Svg: require('@site/static/img/Data Arranging_Two Color.svg').default,
    description: (
      <>
        插件支持所有1.16.5+所有版本以及所有支持Bukkit插件的核心, 
        Mod提供Forge 1.18.1、1.18.2、1.19.2 
        Fabric 1.18.2、1.19.2
      </>
    ),
  },
  {
    title: '快速上手',
    Svg: require('@site/static/img/Startup_Two Color.svg').default,
    description: (
      <>
        无需使用Blockbench导出模型, 插件一键自动生成资源包文件, 兼容多贴图, 
        自动识别动态贴图, 插件自动识别碰撞箱大小. 模型与动画文件自带加密，保障模型文件安全.
      </>
    ),
  },
  {
    title: '高兼容性',
    Svg: require('@site/static/img/Brainstorming session _Isometric.svg').default,
    description: (
      <>
        插件兼容ModelEngine部分常用功能, NPC插件兼容<code>CitizensNPC</code>与<code>Adyeshach</code>. 同时提供高自定义度的玩家模型替换.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
