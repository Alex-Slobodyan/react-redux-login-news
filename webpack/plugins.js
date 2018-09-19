const _ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const _HtmlWebPackPlugin = require( "html-webpack-plugin" );

const ExtractTextPlugin = new _ExtractTextPlugin( '[name].bundle.css' );
const HtmlWebPackPlugin = new _HtmlWebPackPlugin( {
  template: "./src/index.html",
  filename: "./index.html"
} )

module.exports = {
  ExtractTextPlugin: ExtractTextPlugin,
  HtmlWebPackPlugin: HtmlWebPackPlugin
};
