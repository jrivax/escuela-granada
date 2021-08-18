const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fonts = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/'
    }
  }
}
const css = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
}

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
// const urlRules = {
//   test: /\.(png|jpg)$/,
//   loader: 'url-loader'
// }
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
      css,
      saasRules,
      fonts
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Escuela Granada',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin()
  ]

});