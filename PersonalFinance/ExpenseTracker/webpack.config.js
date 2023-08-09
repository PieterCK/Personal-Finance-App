const path = require('path')

module.exports = {
    entry:'./node_modules/flowbite/dist/flowbite.min.js',
    output:{
        filename: 'app-bundle.js',
        path: path.resolve(__dirname,'static', 'src')
    }
}