const axios = require("axios");

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.vapetocart.co.uk/",
  generateRobotsTxt: true,
  sitemapSize: 50000,
  exclude: ["/admin", "/dashboard"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard"],
      },
    ],
  },
  
  additionalPaths: async () => {
    try {
      const response = await axios.get("https://apis.truewebpro.com/api/sitemap");

      const categories = response.data?.cats || [];
      const products = response.data?.products || [];
      const brands = response.data?.brands || [];

      const categoryUrls = categories.map((category) => `/${category.handle}`);
      const productUrls = products.map((product) => `/${product.handle}`);
      const brandUrls = brands.map((brand) => `/${brand.handle}`);

      return [...categoryUrls, ...productUrls, ...brandUrls].map((url) => ({
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 1.0,
      }));
    } catch (error) {
      console.error("Error fetching sitemap URLs:", error.message);
      return [];
    }
  },

  transform: async (config, path) => ({
    loc: path,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 1.0,
  }),
};

module.exports = config;
