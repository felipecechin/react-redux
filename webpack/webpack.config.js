const webpack = require('webpack')
const MiniCssExtrackPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: "principal.js",
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtrackPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtrackPlugin.loader,
                    //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()...
                    'sass-loader',
                ]
            }
        ]
    }
}