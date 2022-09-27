const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  performance: {
    hints: false,
  },
  mode: process.env.NODE_ENV,
  resolve: {
    // alias: {
    //   components: path.resolve(__dirname, 'src/components'),
    // },
    modules: [__dirname, "./src/client", "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      // {
      //   test: /\.ts(x?)$/,
      //   exclude: /node-modules/,
      //   use: 'ts-loader',
      // },
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // {
      //   test: /\.tsx?/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env", "@babel/preset-react"],
      //     },
      //   },
      // },
      {
        test: /\.s?[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    // must always create a new instance
    new HtmlWebpackPlugin({
      title: "Development",
      // must set the template for the page to render
      // check approach on this
      template: "./public/index.html",
      filename: "bundle.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: 8080,
    static: [
      {
        directory: path.resolve(__dirname, "./"),
        publicPath: "/",
      },
      {
        directory: path.resolve(__dirname, "bundle"),
        publicPath: "/",
      },
    ],
    hot: true, //Wise words from Lenny: "nice"
    proxy: {
      "/**": {
        target: "http://localhost:3000/",
        secure: false,
        // changeOrigin: true,
      },
      // "*": {
      //   target: "http://localhost:3000/",
      //   secure: false,
      //   changeOrigin: true,
      // },
    },
  },
};
