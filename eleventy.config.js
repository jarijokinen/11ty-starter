module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/_assets/favicon': '/' });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
