# ts-webpack

Webpack configuration for typescript mono-repo. Includes boilerplate for simple web view and express server. Typescript is compiled to javascript using Ts-Loader and is transpiled to a specified target version using Babel. Additional polyfills can be added by extending the babel configuration.

Todo: implement build and deployment configuration/scripts.

# npm scripts

## npm run web

Starts webpack-dev-server at port 8080 serving content from web/\*\*

## npm run server

Compiles the content from /server to /dist and watches for changes. Starts the express server at port 3000 serving content from dist/

## npm start

Runs web and server concurrently.

# usage

    git clone https://github.com/alxford45/ts-weback.git
    cd ts-weback
    npm i
    npm start

# configuration

Customize the webpack configuration by editing constants in config/config.ts.

Add additional plugins or loaders by defining new constants in config/config.ts and importing them into config/webpack.config.ts.

# dependencies

<ul>
  <li>express</li>
  <li>axios</li>
  <li>core-js</li>
  <li>fast-async</li>
</ul>
