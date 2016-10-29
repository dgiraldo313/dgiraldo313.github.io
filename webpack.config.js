var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
            unused: true,
            dead_code: true,
            warnings: false,
            screw_ie8: true,
          },
          compressor: {
            warnings: false,
          },
          beautify: true,
          sourceMap: true,

        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
    ],
  },
};
