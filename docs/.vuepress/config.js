module.exports = {
  dest: 'dist',
  title: 'Hello world',
  base: 'vuePressDemo',
  themeConfig: {
    editLinks: false,
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 定制文章标题颜色
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        title: '一级菜单0',
        collapsable: true,
        children: [
          ['chapter0/', '自定义标题0'],
          'chapter0/module',
        ]
      },
      {
        title: '一级菜单1',
        collapsable: true,
        children: [
          ['chapter1/', '自定义标题二'],
          'chapter1/module',
        ]
      },
    ],
  }
}