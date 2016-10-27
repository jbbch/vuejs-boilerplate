const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  devServer: {
    inline: true,
    hot: true,
    compress: true,
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // compress: {
      //   warnings: false
      // },
      // outputs: {
      //   comments: false
      // }
    }),
    new HtmlWebpackPlugin({
      template: 'template/index.html'
    })
  ]
}
