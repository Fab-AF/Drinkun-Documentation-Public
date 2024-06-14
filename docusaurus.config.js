export default {
  title: "Drinkun",
  tagline:
    "Fast, convenient, and fee-free – the best way to get your drink on.",
  url: "https://Fab-AF.github.io",
  baseUrl: "/my-publicdocs-site/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "FAB-AF", // Usually your GitHub org/user name.
  projectName: "my-publicdocs-site", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Set the docs at the root
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/your-org/your-project/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Docs Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "customers/customers-guide1",
            position: "left",
            label: "Customers",
          },
          {
            type: "doc",
            docId: "drivers/drivers-guide1",
            position: "left",
            label: "Drivers",
          },
          {
            type: "doc",
            docId: "liquor-stores/liquor-stores-guide1",
            position: "left",
            label: "Liquor Stores",
          },
          {
            href: "https://github.com/your-org/your-project",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Customers",
                to: "customers/customers-guide1",
              },
              {
                label: "Drivers",
                to: "drivers/drivers-guide1",
              },
              {
                label: "Liquor Stores",
                to: "liquor-stores/liquor-stores-guide1",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `© Drinkun Inc. ${new Date().getFullYear()} All Rights Reserved`,
      },
    }),
};
