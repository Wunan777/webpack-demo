const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './index.ts', // 指定入口文件为 src 目录下的 index.ts
    target: 'node', // 指定打包目标为Node环境
    mode: 'development',
    externals: [nodeExternals()], // 排除 node_modules 中的模块
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        preferRelative: true,
    },
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出目录设置为根目录下的 dist 文件夹
        libraryTarget: "commonjs" 
    },
};