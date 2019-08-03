//
// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const port = process.env.PORT || 3000; // important
// const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);
//
// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
//
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));
//
//
// // Serve the files on port 3000.
// app.listen(port, function () {
//   console.log(`Example app listening on ${port} port !`);
// });

const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));