const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
// HtmlWebpackPlugin to inject bundles into index
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'web',
  devServer: {
    port: 3000,
    contentBase: './dist',
  },
  entry: {
    app: ['./src/App.jsx'],
    vendor: ['react', 'react-dom']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'], // transpile es6 code
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        loader: [
          MiniCssExtractPlugin.loader, 'style-loader', 
          'css-loader', 'postcss-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    HtmlWebpackPluginConfig,
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: isDevelopment ? '[name].js' : '[name].[hash].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  resolve: { 
    extensions: ['.js', '.jsx', '.scss']
  },
}