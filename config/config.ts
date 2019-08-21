import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as DevServer } from "webpack-dev-server";
import { RuleSetRule, RuleSetUse } from "webpack";

import { PATH as path, dirname } from "../path";
import nodemon from "config/nodemon";

export const types = path.resolve(dirname, "types");
export const config = path.resolve(dirname, "config");

export const web = {
  name: "web",
  entry: "./web/index.ts"
};
export const server = {
  name: "server",
  entry: "./server/index.ts",
  context: path.resolve(dirname)
};
export const devServer: DevServer = {
  host: "localhost",
  port: 8080,
  hot: false,
  proxy: {
    "**": "http://localhost:3000"
  }
};
const BabelLoader: RuleSetUse = {
  loader: "babel-loader",
  options: {
    sourceType: "unambiguous"
  }
};
export const TSLoaderRules: RuleSetRule = {
  test: /\.ts(x?)|.js(x?)$/,
  exclude: /node_modules/,

  loaders: [BabelLoader, "ts-loader"]
};

const NodemonPlugin = require("nodemon-webpack-plugin") as nodemon.WebpackPlugin;
export const nodemonPlugin = new NodemonPlugin({
  script: "dist/main.js"
});
export const htmlWebpackPlugin: HtmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./web/index.html"
});
