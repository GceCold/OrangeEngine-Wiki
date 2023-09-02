// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OrangeEngine',
  tagline: 'OrangeEngine高版本模型引擎',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gcecold.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GceCold', // Usually your GitHub org/user name.
  projectName: 'OrangeEngine-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GceCold/OrangeEngine-Wiki',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GceCold/OrangeEngine-Wiki',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OrangeEngine',
        logo: {
          alt: 'OrangeEngine Logo',
          src: 'img/orange_icon.svg',
        },
        items: [
          {
            href: 'https://engine.icecold.ltd',
            label: '官网',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/GceCold/OrangeEngine-Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '页面',
            items: [
              {
                label: '官网',
                href: 'https://engine.icecold.ltd',
              },
              {
                label: '文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '联系',
            items: [
              {
                label: 'QQ',
                href: 'https://qm.qq.com/q/pFCU2a6SB2&personal_qrcode_source=4',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'JavaDoc',
                href: 'https://gcecold.github.io/javadoc',
              },
              {
                label: 'OrangeMechanic',
                href: 'https://github.com/GceCold/OrangeMechanic',
              },
            ],
          },
        ],
        copyright: `感谢<a href="https://www.wuyuidc.com/" target="_blank">物语云</a>提供高性能云计算服务</br>Copyright © 2022-${new Date().getFullYear()} OrangeEngine.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
