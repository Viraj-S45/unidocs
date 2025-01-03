// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unidocs',
  // tagline: 'Comprehensive docs for customizing your configurations.',
  tagline: 'Explore my configurations and setups. Learn how I customize everything from Linux to Windows and more.',
  favicon: 'img/logo.png',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
  ],
  // Set the production url of your site here
  url: 'https://virajs.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Viraj-S45', // Usually your GitHub org/user name.
  projectName: 'unidocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
          
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
        title: 'Uni Docs',
        logo: {
          alt: 'Uni Docs Logo',
          src: 'img/logo-purple.png',
          srcDark: 'img/logo-yellow.png',
        },
        items: [

          {
            
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Viraj-S45/unidocs',
            className: 'header-github-link',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/viraj-shirodkar/',
            className: 'header-linkedin-link',
            position: 'right',
          },
        ],
        
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/Viraj-S45/unidocs',
        //       },
        //       {
        //         label: 'Linked in',
        //         href: 'https://www.linkedin.com/in/viraj-shirodkar',
        //       },
        //       // {
        //       //   label: 'Stack Overflow',
        //       //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       // },
        //       // {
        //       //   label: 'Discord',
        //       //   href: 'https://discordapp.com/invite/docusaurus',
        //       // },
        //       // {
        //       //   label: 'X',
        //       //   href: 'https://x.com/docusaurus',
        //       // },
        //     ],
        //   },
        //   {
        //     title: 'Explore More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'MIT License',
        //         to: '#',
        //       },
        //       // {
        //       //   label: 'GitHub',
        //       //   href: 'https://github.com/facebook/docusaurus',
        //       // },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Uni Docs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),
};

export default config;
