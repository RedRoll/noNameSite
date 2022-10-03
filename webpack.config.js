var path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // вызов установленных плагинов
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js",          // в таком формате нужно писать название конечного файла, во избежание ошибок
        path: path.resolve(__dirname , "dist")
        // path.resolve возвращает возвращает абослютный путь, т.е. создает папку "dist" в корневом каталоге.
        
    },
    
    // настройка сервера (для того чтобы не билдить/перезагружать страницу при каком-нибуть изменении) ps: изначально его нужно загрузить - "webpack-dev-server" + к нему дополнительно скачать "html-wepack-plugin" и "clean-webpack-plugin"
    devServer: {
        port: 9000,
        // hot: true, 
        // static: {                                      - без данных записей live server работает без проблем, но оставлю в коментарии на всякий случай
        //     directory: path.join(__dirname, './dist'),
        //   }
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { 
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i, exclude: /node_modules/, loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}), // точка входа для плагина HTML, который будет использовать этот файл при создании bundle. Данный плагин необходим для правильной работы live server`a
        new CleanWebpackPlugin(), // удаляет не нужные созданныые файлы
        new MiniCssExtractPlugin()

    ]
}

