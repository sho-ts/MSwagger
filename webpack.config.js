const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: [path.resolve(__dirname, 'src/index.ts')],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      fs: false,
      path: false,
    }
  },
  devtool: 'source-map',
}