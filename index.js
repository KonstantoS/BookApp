/*
* "start": "NODE_PATH=$NODE_PATH:./shared node .",
 "dev": "npm run start & webpack-dev-server --progress --color"
"build": "NODE_ENV=production webpack",
    "watch": "NODE_ENV=development webpack --watch",
    "build-win": "set NODE_ENV=production&&webpack",
    "watch-win": "set NODE_ENV=development&&webpack --watch"
* */

require('babel-register');
require('./server');
