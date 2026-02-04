const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "whatsapp-widget.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "auto"
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "whatsappWidget",
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/WhatsAppWidget.js"
      }
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],

  devServer: {
    static: "./dist",
    port: 9001,
    hot: true
  }
};
