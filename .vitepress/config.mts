import { defineConfig } from "vitepress";
import { version } from "../package.json";
import { autoSideBar } from "./utils/auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ym-excel",
  description: "快速处理Excel数据",

  lang: "zh-CN",

  head: [["link", { rel: "icon", href: "/ym-excel-docs/logo.png" }]],

  lastUpdated: true,

  base: "/ym-excel-docs/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/logo.png",
    siteTitle: "ym-excel官网",
    outline: {
      label: "文章目录",
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    nav: [
      {
        text: "指导",
        link: "/guide/1_preface",
      },
      {
        text: "教程",
        link: "/tutorial/var",
      },
      {
        text: `v${version}`,
        items: [
          {
            text: "更新日志",
            link: `/releases/v${version}`,
          },
        ],
      },
    ],

    sidebar: {
      "/guide": [
        {
          text: "指导",
          items: autoSideBar("guide"),
        },
      ],

      "/tutorial": [
        {
          text: "教程",
          items: autoSideBar("tutorial"),
        },
      ],

      "/releases": [
        {
          text: "更新日志",
          items: autoSideBar("releases").reverse(),
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/2514765066/ym-excel" },
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    footer: {
      copyright: "基于MIT许可发布",
    },
  },
});
