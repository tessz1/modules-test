const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExractPlugin = require('mini-css-extract-plugin');


module.exports = {
    module: {
    rules: [
        {
        test: /\.css$/,
        use: [
            MiniCSSExractPlugin.loader,
            'css-loader'
        ]
    }
    ]
    },
plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
    }),
    new MiniCSSExractPlugin()
    
]
}