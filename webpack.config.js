const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  target: 'web',
  devtool: 'inline-source-map',
  entry: {
    index: path.join(__dirname, 'src', 'index.ts'),
    "components/index": path.join(__dirname, 'src/components', 'index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyLibrary',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /__tests__/],
        use: [
          // {
          //   test: /\.ts(x?)$/,
          //   loader: 'babel-loader',
          //   options: {
          //     presets: ["@babel/preset-react"]
          //   }
          // },
          {

            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true,
              compilerOptions: {
                "sourceMap": "inline-source-map",
                "jsx": "react",
              }
            }
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = () => {


  return config;
};