const path = require('path'); //função para encontrar o arquivo index.js na pasta src
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'), //função para encontrar o arquivo de entrada index.js na pasta src
    output: { // pasta e arquivos de saida
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader', 
            }
        ]
    },
    devServer: {
        port: 3000,
    }
};
