const path = require('path');
module.exports = {
    mode:'development',

    entry:'./src/index.js',
    output: {
        filename: "main.js",
        path:path.resolve(__dirname,'dist')
    },
    watch: true,
    module: {
        "rules": [
            {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: [
                    path.resolve(__dirname, './node_modules'),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash].[ext]',
                        outputPath: '../dist',
                    },
                },
            },
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
            }
        ]
    }
};