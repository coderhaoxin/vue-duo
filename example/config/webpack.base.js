
const { resolve } = require('path')

module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-duo': resolve(__dirname, '../../lib')
    },
    extensions: ['.js', '.vue']
  },
  devtool: '#source-map'
}
