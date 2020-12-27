const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/first-project/project-manager.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/first-project'),
  },
  devtool: 'none',
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
  },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin()
  ]
};