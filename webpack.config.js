const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
require('@babel/register');

const conf = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // to make uglify working -> build project with -mode 'production'
        // include: /\.js?$/,
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      }),
    ],
  },
  entry: {
    app: './public/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'main.js',
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },

  // Plugins
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './public/index.html',
  //     filename: 'index.html',
  //     hash: true,
  //   }),
  //   new ScriptExtHtmlWebpackPlugin({
  //     defaultAttribute: 'defer',
  //   }),
  // ],
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  // don't show main.js.map if production mode ('source-map')
  conf.devtool = production ? false : 'eval-sourcemap';

  return conf;
};
