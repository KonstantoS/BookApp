const webpack = require('webpack');
//const HtmlPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const files = {
    entry: __dirname + '/src/App.js',
    outputPath: __dirname + '/public/js',
    outputPublicpath: '/js/',
    outputFilename: 'bundle.js',


    htmlTemplate: __dirname + '/src/index.html',
    cssPath: 'styles/styles.[chunkhash].css',


    outputFilenameDev: 'javascript/bundle.js',
    cssPathDev: 'styles/styles.css'
};

const base = {
    entry: files.entry,
    output: {
        path: files.outputPath,
        filename: files.outputFilename,
        publicPath: files.outputPublicpath
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /src/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
            /*{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }*/
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        /*new HtmlPlugin({
            template: files.htmlTemplate,
            minify: {
                collapseWhitespace: true
            }
        })*/
    ]
};/*

if (process.env.NODE_ENV === 'production') {
    module.exports = base;
    module.exports.plugins = module.exports.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
        new ExtractTextPlugin(files.cssPath)
    ]);
} else if (process.env.NODE_ENV === 'development') {
    module.exports = base;
    module.exports.output.filename = files.outputFilenameDev;
    module.exports.plugins.push(new ExtractTextPlugin(files.cssPathDev));
}*/
module.exports = base;