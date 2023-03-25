/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://blog.nakzyu.com",
  generateRobotsTxt: true, // (optional)
  outDir: "out",
  // ...other options
};
