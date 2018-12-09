const path = require('path');

module.exports = {
    mode: 'development',
    entry: './out/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
};
