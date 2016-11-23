說明：
===

練習1：用node.js來設置前端開發環境，這個練習使用了webpack做bundler，webpack-dev-server做開發伺服器，並設定react的loader及html-webpack-plugin的plugin。

建立package.json檔：
----------------

    npm init


安裝所需要的package：

    npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react eventsource-polyfill html-webpack-plugin react react-dom webpack webpack-dev-server
**新增「src」資料夾及「index.html」、「index.js」、「apple.jsx」三個檔案**


index.html內容：

    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>
    </head>
    <body>
      <div id="fruit"></div>
    </body>
    </html>

index.js內容：

    import Apple from './apple.jsx';


apple.jsx內容：

    import React from 'react';
    import ReactDOM from 'react-dom';
    
    class Apple extends React.Component{
      render(){
        return <h1>This is an apple。</h1>;
      }
    }
    
    ReactDOM.render(<Apple />,document.getElementById('fruit'));


在根目錄建立webpack.config.js檔：

    var path = require('path');
    var webpack = require('webpack');
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
      entry: './src/index',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html'),
          filename: 'index.html',
          inject: 'body',
        })
      ]
    };


監聽專案：

    npm run dev

我們可以在http://localhost:8080/webpack-dev-server/看到執行的結果


打包專案：

    npm run build

