const path = require('path');
const StyleLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  webpack: {
    plugins: [
      new StyleLintPlugin({
        context: 'src',
        configFile: path.join(__dirname, './stylelintrc.js'),
        files: '**/*.less',
        failOnError: false,
        quiet: true,
        syntax: 'less'
      })
    ]
  }
};
