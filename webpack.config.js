const fs = require('fs');
const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

module.exports = {
  ...defaultConfig,
  entry: {
    admin: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
