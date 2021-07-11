const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   entry: path.resolve(__dirname, 'src/index.js'),
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
      port: 8080
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'src/index.html'),
         title: 'Урок по rxjs'
      })
   ]
}