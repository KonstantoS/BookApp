import express from 'express';
import path from 'path';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
//import './src/index.html'

/*import configureStore from '../common/store/configureStore'
 import App from '../common/containers/App'
 import { fetchCounter } from '../common/api/counter'
 */

const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, 'public')));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));

const handleRender = (req,res) => {
    //AsyncFunction
    res.sendFile(__dirname + '/index.html');
};

app.use(handleRender);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
});