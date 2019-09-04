module.exports = {
  title: "Developer Docs",
  description: "Developer documentation for Bot Bind addon developers.",
  themeConfig: {
    logo: "./assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Main Site", link: "http://botbind.com" }
    ],
    sidebar: "auto",
    lastUpdated: true,
    repo: "botbind/docs",
    editLinks: true
  },
  base: "/docs/",
  dest: "./docs",
  serviceWorker: true
};