const HtmlWebpackPlugin = require('html-webpack-plugin');
const javascriptRules = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-env'
      ],
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
}
const imagesRules = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: 'file-loader',
  options: {
    name: '[path][name].[ext]',
  }
}
const saasRules = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        // Prefer `dart-sass`
        implementation: require("sass")
      }
    }
  ]
}
const urlRules = {
  test: /\.(png|jpg)$/,
  loader: 'url-loader'
}
module.exports = (env, { mode }) => ({
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: 'app.[contenthash].js'
  },
  watchOptions: {
    poll: true,
    ignored: '/node_modules/',
  },
  module: {
    rules: [
      javascriptRules,
      imagesRules,
      saasRules,
      urlRules
      // styleRules,
      // imageRules
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Escuela Granada',
      template: 'src/index.html'
    })
  ]

});