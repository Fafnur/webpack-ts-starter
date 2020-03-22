const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {/* Loader options go here */}
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: './index.html'
      },
      {
        from: 'src/assets/**/*',
        to: './assets',
        transformPath(targetPath, absolutePath) {
          return targetPath.replace('src/assets', '');
        }
      },
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style-[hash].css',
      allChunks: true
    })
  ]
};
