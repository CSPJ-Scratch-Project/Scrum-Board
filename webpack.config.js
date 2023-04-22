const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', 
    entry: {
      src: '/client/index.js' //from '/client/index.js'
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './build')
    },
    
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'] 
              
            }
          }]
        },
        { 
          test: /\.s?css/,
          use: ['style-loader','css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: 'index.html'
      }),
    ],
    devServer: {
      // enable HMR on the devServer
      hot: true,
      static: {
        publicPath: '/build',
        directory: path.resolve(__dirname, 'build')
      },
      proxy: {
        '/api': 'http://localhost:3000'
      }
    }
}
















// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './client/index.js',
//   output: {
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//       }
//     ]
//   },
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     // enable HMR on the devServer
//     hot: true,
//     // fallback to root for other urls
//     historyApiFallback: true,

//     static: {
//       // match the output path
//       directory: path.resolve(__dirname, 'dist'),
//       // match the output 'publicPath'
//       publicPath: '/',
//     },
//   }
// }