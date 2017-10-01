const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Dupa',
    libraryTarget: 'umd',
  },
  externals: ['react', 'react-dom'],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react'],
      },
    }]
  },
};
