const path = require("path")
const dotenv = require("dotenv")
const webpack = require("webpack")
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const HtmlWebpackPlugin = require("html-webpack-plugin")

dotenv.config()

module.exports = {
  // mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
    open: true,
    hot: true,
    // compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env), // Define environment variables
    }),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}
