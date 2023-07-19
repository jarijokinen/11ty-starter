module.exports = (eleventyConfig) => {
  eleventyConfig.addGlobalData('timestamp', Date.now());
  eleventyConfig.addPassthroughCopy({ 'src/_assets/favicon': '/' });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
