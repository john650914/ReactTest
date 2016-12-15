#練習 2 說明：#
 - 在 webpack 中使用 sass 來撰寫 CSS，並加入 sourceMap 幫助開發
 - 產生實體的 CSS 檔而不是埋在 Javascript 裡
 - 在 sass 及 react 加入圖檔

###安裝所需要的 package：###
    npm i --save-dev css-loader extract-text-webpack-plugin node-sass sass-loader style-loader url-loader

###修改 webpack.config.js： ###
~~~javascript
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: [
        'eventsource-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
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
            },
            {
                test: /(\.sass$|\.scss$)/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass')
            },
            {
                test: /\.(jpg|gif|png)$/,
                loader: 'url-loader?limit=1024&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin('style/main.css', {
            allChunks: true
        })
    ]
};
~~~

###新增下列圖檔：###
 - src/images/smile.png
 - src/style/img/puppy.jpg

###新增 src/style/main.sass 及編輯其內容：###
~~~sass
*
    border: 1px solid blue
#fruit
    background: url(img/puppy.jpg) left top no-repeat
    height: 500px
~~~

###編輯 apple.jsx：###
~~~jsx
import React from 'react';
import ReactDOM from 'react-dom';


class Apple extends React.Component{
    render(){
        return (
            <div>
                <h1>This is an apple!!!</h1>
                <img src={require("./images/smile.png")} />
            </div>
        );
    }
}


ReactDOM.render(<Apple />,document.getElementById('fruit'));
~~~

###編輯 apple.jsx：###
~~~js
import Apple from './apple.jsx';
import './style/main.sass';
~~~

執行 npm run dev 就可以在網頁中看到我們新增的樣式及插入的圖片，執行 npm run build 就可以在 dist 目錄中看到我們的 css 檔及圖檔。

如此我們就可以開始撰寫 sass，並且 webpack 會自動幫我們 compile CSS，非常方便，接下來的練習可能會是：
 - Multiple react Component的操作
 - Hot Reloading
 - Express
 - Redux
 - React Router
