const path = require("path");

module.exports = {
  entry: {
    app: "./www/js/app.js",
    components: "./www/js/components.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "www/dist")
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: {
          loader: "raw-loader"
          // loader: "html-loader",
          // options: {
          //   minimize: false
          // }
        }
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      Scripts: path.resolve(__dirname, "www/js/"),
      Templates: path.resolve(__dirname, "www/templates/"),
      Styles: path.resolve(__dirname, "scss/"),
      Components: path.resolve(__dirname, "www/components/")
    }
  }
};
