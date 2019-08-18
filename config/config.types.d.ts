import {
  Output as IOutput,
  Configuration as IConfiguration,
  Resolve as IResolve,
  Module as IModule,
  RuleSetRule as IRuleSetRule,
  RuleSetCondition,
  RuleSetUse
} from "webpack";
import { Configuration as IDevConfig } from "webpack-dev-server";
import { Tapable } from "tapable";

export declare type Output = IOutput & {
  path: string;
  filename: string;
};

export declare type DevServer = IDevConfig & {
  host: string;
  hot: boolean;
  port: number;
};
export declare type Resolve = IResolve & {
  extensions: string[];
};
export declare type Module = IModule & {
  rules: RuleSetRule[];
};
export declare type RuleSetRule = IRuleSetRule & {
  test: RuleSetCondition;
  use: RuleSetUse;
  exclude: RuleSetCondition;
  resolve: Resolve;
};
export declare type Mode = "development" | "production" | "none";
export declare type Configuration = IConfiguration & {
  name: string;
  mode: Mode;
  entry: string;
  devServer: DevServer;
  module: Module;
  plugins: Tapable.Plugin[];
  output?: Output;
};
