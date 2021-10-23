const fs = require('fs');
const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  ...defaultConfig,
  entry: {
    admin: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PROD ? '[name].min.js' : '[name].js',
    publicPath: '/wp-content/plugins/woo-availability/dist/',
    // chunkFilename: 'chunks/[name].js',
  },
  resolve: {
    alias: {
      ...defaultConfig.resolve.alias,
      '@': path.resolve('./src/'),
    },
  },
  plugins: [
    // remove the plugin, next insert our own logic
    ...defaultConfig.plugins.filter(
      (plugin) =>
        plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
    ),
    new DependencyExtractionWebpackPlugin({
      injectPolyfill: true,
      requestToExternal(request) {
        // remove WordPress externals, except...
        // api-fetch, because it sets the API fetching defaults
        if (request !== '@wordpress/api-fetch') {
          return '';
        }
      },
    }),
  ],
  optimization: {
    ...defaultConfig.optimization,
    minimize: PROD,
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      cacheGroups: {
        ...defaultConfig.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
