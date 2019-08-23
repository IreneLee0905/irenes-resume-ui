const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');

module.exports = () => {

  /**
   * import process.env value from .env file with dotenv.
   * please follow the link to get further information : https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
   */
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next)=>{
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  },{});

  return {


    entry: ["./src/index.js"],
    output: {
      path: __dirname + '/dist',
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
        , {
          test: /\.png$/,
          loader: "url-loader?limit=100000"
        }, {
          test: /\.jpg$/,
          loader: "file-loader"
        },

      ]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
        favicon: './favicon.ico',
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      historyApiFallback: true
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }
};

