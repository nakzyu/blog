/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://blog.nakzyu.ch",
  generateRobotsTxt: true, // (optional)
  outDir: "out",
  // ...other options
};
