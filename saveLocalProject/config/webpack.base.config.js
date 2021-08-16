/*
 * @Description:
 * @Date: 2020-12-11 15:34:09
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
// 清理产出目录的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//  产出 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 单独打包css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    // 输出目录
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    contentBase: "../dist",
    inline: true,
    open: true,
    host: "localhost",
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // 单独打包scss
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader",
        }),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf)(\?.*)?$/, //
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // 单独打包scss
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath("css/[name].css").replace("css/js", "css");
      },
      allChunks: true,
    }),
  ],
};
