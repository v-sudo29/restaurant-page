const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPLugin({
      title: 'Restaurant Page',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'src/[name].[ext]',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};