#練習 1 說明：#

用 node.js 來設置前端開發環境，這個練習使用了 webpack 做 bundler，webpack-dev-server 做開發伺服器，並設定 react 的 loader 及 html-webpack-plugin 的 plugin。
###初始化專案 ( 建立 package.json 檔 )：###

    npm init

###安裝所需要的 package：###

    npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react eventsource-polyfill html-webpack-plugin react react-dom webpack webpack-dev-server

 - babel-core babel-loader babel-preset-es2015 babel-preset-react<br>ES6 compiler
  
 - eventsource-polyfill<br>好像是給IE用的
 
 - html-webpack-plugin<br>自動載入compile過的JS檔到html文件

 - react react-dom<br>React核心

 - webpack<br>webpack

 - webpack-dev-server<br>webpack-dev-server

<br>
###新增「src」資料夾及主文件「index.html」###

####index.html 內容：####
~~~html
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
~~~
###編寫 React component - 在「src」內繼續新增「index.js」、「apple.jsx」兩個檔案###
####index.js 內容：####
~~~javascript
import Apple from './apple.jsx';
~~~
**apple.jsx 內容：**
~~~javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Apple extends React.Component{
    render(){
        return <h1>This is an apple。</h1>;
    }
}

ReactDOM.render(<Apple />,document.getElementById('fruit'))
~~~
###建立webpack設定檔 - 在根目錄建立 webpack.config.js 檔：###

~~~javascript
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'eventsource-polyfill', // 據說可以讓 Webpack 兼容 IE
        './src/index'
    ],
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
~~~
###監聽專案：###

    npm run dev

我們可以在http://localhost:8080/webpack-dev-server/看到執行的結果
<br>
###打包專案：###

    npm run build

<br>
###以上，一個基本的開發環境就建立完成，後續的練習將再帶入其它設定，例如：###
- Multiple react Component的操作
- 安裝sass/scss loader
- 更多的plugin使用
- ...........
