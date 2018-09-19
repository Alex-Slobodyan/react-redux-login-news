const plugins = require( './plugins' );

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
};

const HTMLLoader = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader"
    }
  ]
}

const CSSLoader = {
  test: /\.css$/,
  use: plugins.ExtractTextPlugin.extract( {
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: "[local]-[hash:base64:5]"
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: __dirname + '/postcss.config.js'
          }
        },
      },
    ],
  } ),
};

module.exports = {
  JSLoader: JSLoader,
  HTMLLoader: HTMLLoader,
  CSSLoader: CSSLoader,
};
