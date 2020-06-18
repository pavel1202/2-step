const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
      template: './src/pages/index.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'HeadersFooters.html',
        template: './src/pages/HeadersFooters/HeadersFooters.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'Cards.html',
        template: './src/pages/Cards/Cards.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'FormElements.html',
        template: './src/pages/FormElements/FormElements.pug'
    }),
  ],
  module: {
    rules: [
        { 
        test: /\.pug$/,
        use: ["pug-loader"]
        },
        {
        test: /\.css$/,
        use: [
           'style-loader',
           'css-loader',
          ],
        },
        {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {
                outputPath:'./img',
                name:'[name].[ext]'
            }
        }],
        },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
            loader: 'file-loader',
            options: {
                outputPath:'./fonts',
                name:'[name].[ext]'
            }
        }],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        
    ]
  }
};
module.exports = (env, argv) => {
if (argv.mode === 'development') {}
 if (argv.mode === 'production') {}
return config;
}