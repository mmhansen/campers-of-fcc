const webpack = require('webpack');
const env = process.env.NODE_ENV;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST = path.join(process.cwd(), 'client', 'public', 'assets');

module.exports = {
  devtool: 'source-map',
  context: process.cwd(),
  entry: {
    app: './client/app/app.jsx',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: DIST,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/assets'
  },
  resolve: {
    alias: {
      Main: 'app/components/Main.jsx',
      'react': path.join(process.cwd(), 'node_modules', 'react', 'dist', 'react.min.js'),
      'react-dom': path.join(process.cwd(), 'node_modules', 'react-dom', 'dist', 'react-dom.min.js')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ["stage-0", [ "es2015", { "modules": false } ], "react"],
          "plugins": [
            "transform-react-remove-prop-types",
            "transform-react-constant-elements"
          ]
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      },
      {
        loader:'file-loader?limit=1024&name=/images/[name][hash].[ext]',
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/
      },
      {
        loader: 'file-loader?limit=1024&name=/fonts/[name][hash].[ext]',
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVTOOLS__: JSON.stringify(env)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor', 'manifest' ]
    }),
    new HtmlWebpackPlugin({
      template: path.join('.', 'client', 'app', 'index.html')
    }),
    new CleanWebpackPlugin(DIST, {
      root: process.cwd()
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkHash].css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
