const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath // set the path from where to read the build css
}).listen(config.port, config.host, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost: 3002');
});