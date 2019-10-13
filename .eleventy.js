module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  return {
    templateFormats: [
      "njk",
    ],
    pathPrefix: "/",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site"
    }
  };
};