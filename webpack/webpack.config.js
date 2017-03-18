const webpack = require('webpack');
const env = process.env.NODE_ENV;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PORT = Number(process.env.PORT) || 3000;
const localhost = 'http://localhost:';
const hmrScript = `webpack-hot-middleware/client?path=${localhost}${PORT}/__webpack_hmr`;

module.exports = {
  devtool: 'source-map',
  context: process.cwd(),
  entry: {
    app: ['./client/app/app.jsx', hmrScript]
  },
  output: {
    path: path.join(process.cwd(), 'client', 'public', 'assets'),
    filename: '[name].js',
    publicPath: '/'
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
        loader:`file-loader?limit=1024&name=${localhost}${PORT}/images/[name][hash].[ext]`,
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),    
    new webpack.DefinePlugin({
      __DEVTOOLS__: JSON.stringify(env),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.join('.', 'client', 'app', 'index.html')
    })
  ]
};
