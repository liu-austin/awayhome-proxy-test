const path = require('path');

module.exports = {
  entry: {
      austin: path.resolve(__dirname, './search-bar-booking-tool/client/src'),
      kat: path.resolve(__dirname, './overview-amenities/client/src'),
      matthew: path.resolve(__dirname, './Reviews/client/src')
  },
  output: {
      path: path.resolve(__dirname, './client/dist'),
      filename: "[name]-bundle.js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', {'plugins': ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']}]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};