import nodeExternals from "webpack-node-externals";
import { Configuration } from "webpack";

import {
  server,
  TSLoaderRules,
  web,
  devServer,
  types,
  nodemonPlugin,
  htmlWebpackPlugin,
  config
} from "./config";

const configuration: Configuration[] = [
  {
    name: server.name,
    entry: server.entry,
    context: server.context,
    mode: "development",
    module: {
      rules: [TSLoaderRules]
    },
    resolve: {
      extensions: [".ts, .js"],
      alias: {
        types: types,
        config: config
      }
    },
    target: "node",
    externals: [nodeExternals()],
    plugins: [nodemonPlugin]
  },
  {
    name: web.name,
    entry: web.entry,
    mode: "development",
    devServer: devServer,
    module: {
      rules: [TSLoaderRules]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        types: types
      }
    },
    plugins: [htmlWebpackPlugin]
  }
];

export default configuration;
