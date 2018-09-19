
const variables = require( './var-css' );

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {
      extensions: {
        '--phone': '(max-width: 544px)',
        '--tablet': '(max-width: 768px)',
        '--desktop': '(max-width: 992px)',
        '--large-desktop': '(max-width: 1200px)',
      }
    },
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables: variables
        }
      }
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },

    'postcss-assets': {},
    'cssnano': {}
  },
};
