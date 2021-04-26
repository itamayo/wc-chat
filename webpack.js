const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common.js');
const regeneratorRuntime = require("regenerator-runtime");


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
  
  ],
  module: {
    rules: [
     
    ]
  }
});
