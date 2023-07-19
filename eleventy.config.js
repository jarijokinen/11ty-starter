const schemaPlugin = require('@quasibit/eleventy-plugin-schema');

module.exports = (eleventyConfig) => {
  eleventyConfig.addGlobalData('timestamp', Date.now());
  eleventyConfig.addPassthroughCopy({ 'src/_assets/favicon': '/' });
  eleventyConfig.addPlugin(schemaPlugin);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
