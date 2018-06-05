const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  port: 3002,
  host: 'localhost',
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://' + this.host + ':' + this.port,
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style?sourceMap', 'css', 'postcss', 'sass'],
      },
      {
        test: /\.png|jpeg$/,
        loaders: [
          'url-loader?limit=100000',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: [
    autoprefixer,
  ],
};
