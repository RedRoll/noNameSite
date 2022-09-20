var path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // вызов установленных плагинов
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js",          // в таком формате нужно писать название конечного файла, во избежание ошибок
        path: path.resolve(__dirname , "dist")
        
        
    },
    // настройка сервера (для того чтобы не билдить/перезагружать страницу при каком-нибуть изменении) ps: изначально его нужно загрузить - "webpack-dev-server" + к нему дополнительно скачать "html-wepack-plugin" и "clean-webpack-plugin"
    devServer: {
        port: 9000,
        hot: true,
        static: {
            directory: path.join(__dirname, './dist'),
          }
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()

    ]
}

