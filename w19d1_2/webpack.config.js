const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: true,
    hot: true,
  },
};
