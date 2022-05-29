const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['~storybook'] = path.resolve(__dirname)
  config.resolve.alias['@'] = path.resolve(__dirname, '../src')

  config.resolve.extensions = [".ts", ".js", ".vue"]

  config.module.rules.push({
    resourceQuery: /blockType=story/,
    loader: 'vue-storybook',
  })

  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  config.module.rules.push({
    test: /\.(ts|tsx)?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      transpileOnly: true
    }
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin({
    typescript: {
      extensions: {
        vue: true
      }
    }
  }))

  return config
}
