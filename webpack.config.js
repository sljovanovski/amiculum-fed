const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 7',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = {
  port: 3002,
  host: 'localhost',
  devtool: 'source-map',
  entry: [ // read the index.js script and generate the bundle from it
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
      { // loader to load the scss files
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
  postcss: [// add autoprefixer to support multiple browsers
    autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }),
  ],
};
