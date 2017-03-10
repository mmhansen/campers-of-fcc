const webpack = require('webpack');
const env = process.env.NODE_ENV;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: process.cwd(),
  entry: {
    app: './client/app/app.jsx',
    vendor: [
      'react',
      'react-dom',
      'redux'
    ]
  },
  output: {
    path: path.join(process.cwd(), 'client', 'public', 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
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
          presets: ["stage-0", "es2015", "react"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.css|\.scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVTOOLS__: JSON.stringify(env)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest', 'vendor']
    }),
    new HtmlWebpackPlugin({
      template: path.join('.', 'client', 'public', 'index.html')
    })
  ]
};
