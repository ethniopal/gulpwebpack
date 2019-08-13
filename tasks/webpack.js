import {basePath, srcDir, distDir, config as configData} from "./config.js";

import path    from 'path'
import webpack from 'webpack'
import process from 'process'

const isProduction = (process.env.NODE_ENV === 'production')

let config = {
    mode: isProduction ? "production" : "development",
    entry: configData.js.src + '/main.js',

    output: {
        filename: configData.js.src + '/bundle.js',
        path: path.resolve(__dirname, '../' + srcDir)
    },

    context: path.resolve(__dirname, '../' + srcDir),

    plugins: isProduction ? [ new webpack.optimize.UglifyJsPlugin() ] : []
}


function scripts() {

    return new Promise(resolve => webpack(config, (err, stats) => {

        if(err) console.log('Webpack', err)

        console.log(stats.toString({ /* stats options */ }))

        resolve()
    }))
}

module.exports = { config, scripts }
