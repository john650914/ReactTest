#練習 2 說明：#
 - 在 webpack 中使用 sass 來撰寫 CSS，並加入 sourceMap 幫助開發
 - 產生實體的 CSS 檔而不是埋在 Javascript 裡
 - 在 sass 及 react 加入圖檔

###安裝所需要的 package：###
    npm i --save-dev css-loader extract-text-webpack-plugin node-sass sass-loader style-loader url-loader autoprefixer-loader

 - style-loader 自動將 CSS 檔的內容插入到頁面有 require CSS 的地方，並用 &lt;style&gt; 包住（require 可載入 CSS 了）
 - css-loader 自動處理 CSS 內的 url 和 @import 的路徑轉換，可以傳入 sourceMap 參數以便 debug
 - sass-loader 自動編譯 sass 檔成 CSS （require 可載入 sass 了）
 - url-loader 自動將圖片轉成 Data URL，設定時可帶入[hash:8]（代表8碼的hashtag）、[path]、[name]及[ext]等的描述，它也可設定指定的大小將圖檔轉換成base64格式，寫法範到：loader: 'url?limit=1024&name=[sha512:hash:base64:7].[ext]'；
 - 通常網路上的教學會要我們也安裝file-loader，但實測後發現url-loader就夠了
 - extract-text-webpack-plugin，webpack會將載入的 css 用 &lt;style&gt; 標籤寫在 html 文件中，使用這個 plugin 可以將 css 分離到一支獨立的 css 檔 
 - sass-loader（若安裝 sass-loader 不成功需加裝 node-sass）
 - autoprefixer-loader 則是自動產生各種瀏覽器專用的語法，例如 display: flex 輸出就就會自動加上 -webkit-、-ms- 等的 prefix

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
    entry: ['./src/index'],
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
                loader: ExtractTextPlugin.extract('css?sourceMap!autoprefixer!sass')
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
