
const base = require('../config/webpack.base')
const merge = require('webpack-merge')
const { resolve } = require('path')

const config = merge(base, {
  entry: './main.js',
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  }
})

module.exports = config
