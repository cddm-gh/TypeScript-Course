const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/first-project/project-manager.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/first-project'),
    publicPath: 'dist/first-project'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};