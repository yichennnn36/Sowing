const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node14',
  externals: [nodeExternals()],
  optimization: {
    minimize: true,
    concatenateModules: false,
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'infrastructure'),
          path.resolve(__dirname, 'sowing'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: '14' }, debug: true }],
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};