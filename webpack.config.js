const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = require('./webpack.parts');

const commonConfig = merge([
  {
    output: {
      publicPath: '/'
    }
  },
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Wepack demo'
      })
    ]
  },
  parts.loadCSS()
]);

const prodConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  })
]);

module.exports = (mode) => {
  if (mode === 'production') {
    return merge(commonConfig, prodConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
