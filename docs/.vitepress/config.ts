/*
 * @Author: Lybeen
 * @Email: helibin@139.com
 * @Date: 2021-08-17 21:37:08
 * @LastEditTime: 2022-11-15 10:51:20
 * @LastEditors: Lybeen
 * @FilePath: /mine/helibin.github.io/docs/.vitepress/config.ts
 */
import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Vitepress', // 网站标题
  description: '我的vitepress博客.', //网站描述
  lastUpdated: true,
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  // 主题配置
  themeConfig: {
    // logo: 'logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/note/' },
      { text: '随笔', link: '/random/' },
      { text: '博客', link: 'https://blog.helibin.com' },
    ],
    //   侧边导航
  },
  outDir: './dist'
});
