const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: '$platform',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};

const browserConfig = {
  output: {
    libraryTarget: 'window',
    filename: 'platform.min.js'
  }
};

const nodeConfig = {
  output: {
    filename: 'platform.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

module.exports = [
  merge(commonConfig, browserConfig),
  merge(commonConfig, nodeConfig)
];
