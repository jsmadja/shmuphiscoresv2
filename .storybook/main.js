const path = require('path');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.extensions = [".ts", ".js", ".vue"];

    config.module.rules.push({
      test: /\.(ts|tsx)?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        transpileOnly: true
      }
    })

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')

    config.plugins.push(new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: true
        }
      }
    }));

    // Return the altered config
    return config;
  },
}
