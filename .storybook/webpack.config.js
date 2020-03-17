const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))

  return config;
};
