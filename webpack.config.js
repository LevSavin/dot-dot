const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [{
            test: /\.(ttf|eot|woff|svg|woff2)$/,
            use: {
               loader: "file-loader",
               options: {
                  name: './fonts/[name].[ext]',
               }
            }
         },
         {
            test: /\.(s*)css$/,
            use: [
               miniCss.loader,
               'css-loader',
               'sass-loader',
            ]
         }
      ]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};