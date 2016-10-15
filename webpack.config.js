module.exports = {
  devtools: 'source-map',
  entry: './client/app/app.jsx',
  output: {
    path: __dirname,
    filename: './client/public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx'
    },
    extensions: ['', '.js', '.jsx']
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
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};
