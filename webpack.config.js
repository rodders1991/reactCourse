// entry -> output
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      // Regular expression to include all .js files
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
