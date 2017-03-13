const webpack = require('webpack');
const env = process.env.NODE_ENV;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: process.cwd(),
  entry: './client/app/app.jsx',
  output: {
    path: path.join(process.cwd(), 'client', 'public', 'assets'),
    filename: '[name].js',
    publicPath: '/assets'
  },
  resolve: {
    alias: {
      Main: 'app/components/Main.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ["stage-0", "es2015", "react"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /(\.css|\.scss)$/
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
    new HtmlWebpackPlugin({
      template: path.join('.', 'client', 'app', 'index.html')
    })
  ]
};
