/**
 * Created by siri on 2016-11-11.
 */
module.exports = {
    entry: ['./src/index.js',
            './src/style.css'
    ],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        historyApiFallback: true,
        contentBase: __dirname + '/public/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                loader:'style!css-loader'
            }
        ]
    }
};

