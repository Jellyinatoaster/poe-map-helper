/* eslint-disable global-require */
const IN_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 0 }),
    require('tailwindcss')(),
    IN_PRODUCTION &&
      require('@fullhuman/postcss-purgecss')({
        content: [
          `./public/**/*.html`,
          `./src/**/*.vue`,
          `./node_modules/@vue/ui/dist/vue-ui.css`,
          `./node_modules/vue-good-table/dist/vue-good-table.css`
        ],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
          return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
        },
        whitelist: [],
        whitelistPatterns: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/
        ]
      }),
    require('autoprefixer')()
  ]
};
