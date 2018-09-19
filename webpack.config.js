const loaders = require( './webpack/loaders' );
const plugins = require( './webpack/plugins' );

module.exports = {
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.HTMLLoader
    ]
  },
  plugins: [
    plugins.HtmlWebPackPlugin,
    plugins.ExtractTextPlugin
  ],
};
