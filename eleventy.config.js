module.exports=function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
  };


  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

  module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
  };
  

  



  
  