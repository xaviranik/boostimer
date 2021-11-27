const fs = require("fs");
const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const PROD = process.env.NODE_ENV === "production";

const coreModule = {
  ...defaultConfig,
  entry: {
    core: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/wp-content/plugins/boostimer/dist/",
    // chunkFilename: 'chunks/[name].js',
  },
  resolve: {
    alias: {
      ...defaultConfig.resolve.alias,
      "@": path.resolve("./src/"),
    },
  },
  plugins: [
    // remove the plugin, next insert our own logic
    ...defaultConfig.plugins.filter(
      (plugin) =>
        plugin.constructor.name !== "DependencyExtractionWebpackPlugin"
    ),
    new DependencyExtractionWebpackPlugin({
      injectPolyfill: true,
      requestToExternal(request) {
        // remove WordPress externals, except...
        // api-fetch, because it sets the API fetching defaults
        if (request !== "@wordpress/api-fetch") {
          return "";
        }
      },
    }),
  ],
  optimization: {
    ...defaultConfig.optimization,
    minimize: PROD,
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      chunks: "all",
      name: "vendors",
      cacheGroups: {
        ...defaultConfig.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};

const mainModule = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    "js/admin": "./assets/src/js/admin.js",
    "js/frontend": "./assets/src/js/frontend.js",
    "css/frontend": "./assets/src/scss/frontend.scss",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: PROD ? "[name].min.js" : "[name].js",
  },
  optimization: {
    minimize: PROD,
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "css/",
              name: PROD ? "[name].min.css" : "[name].css",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new FixStyleOnlyEntriesPlugin()],
};

module.exports = [coreModule, mainModule];
