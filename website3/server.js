var webpack = require('webpack');
var config = require('./webpack.config.dev');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');

var express = new (require('express'))();

var compiler = webpack(config)

express.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true },
  noInfo: true
}));

express.use(WebpackHotMiddleware(compiler, {
  log: console.log
}))

express.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

express.listen(8080, 'localhost', function () {
  console.log('Listening on 8080')
})


/*var express = require('express')
var webpack = require('webpack')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev')
var compiler = webpack(config)

app = express()
app.use(express.static('public'));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}))
app.use(WebpackHotMiddleware(compiler))

var router = express.Router()
router.get('/', function (req, res, next) {
  res.render('index', { message: 'Hey there!'});
})
app.use(router)

app.listen(8080, function () {
  console.log('Listening on 8080')
})*/