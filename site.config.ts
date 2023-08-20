import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b1c24c68251c4062a46c89672620497b',

  // 如果您想将页面限制为单个概念工作区（可选）
  // （这应该是一个概念 ID；有关如何提取它的信息，请参阅文档）
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'SuperGame',
  domain: 'https://www.notion.so/Blog-b1c24c68251c4062a46c89672620497b',
  author: 'Pluto Dugue',

  // 打开图元数据（可选）
  description: 'A free resouces web',

  // social usernames (optional)
  twitter: 'PlutoDugue',
  github: 'PlutoDugue',
  linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // 默认概念图标和封面图像以实现站点范围的一致性（可选）
  // 页面特定值将覆盖这些站点范围的默认值
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // 是否启用对LQIP预览图像的支持（可选）
  isPreviewImageSupportEnabled: true,

  // 是否启用redis来缓存生成的预览图像（可选）
  // 注意：如果启用redis，则需要设置`REDIS_HOST`和`REDIS_PASSWORD`
  // 环境变量。 请参阅自述文件以获取更多信息
  isRedisEnabled: false,

  // 概念页面 ID 到 URL 路径的映射（可选）
  // 此处定义的任何页面都将覆盖其默认 URL 路径
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // 是否使用默认的概念导航样式或带有重要页面链接的自定义导航样式
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
