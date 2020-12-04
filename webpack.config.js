const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output: {
        filename: "main.js",
        path:path.resolve(__dirname,'dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        "rules": [
            {
                "test": /\.scss$/,
                "use":[
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {importLoaders:1}
                    },
                    {
                        loader: "sass-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        "autoprefixer"
                                    ]
                                ]
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename:'img/[hash][ext]'
                }
            },
        ],
    }
};