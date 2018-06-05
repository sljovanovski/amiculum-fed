const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
}).listen(config.port, config.host, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost: 3002');
});