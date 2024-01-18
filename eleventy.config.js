import schemaPlugin from '@quasibit/eleventy-plugin-schema';

export default async function(eleventyConfig) {
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
