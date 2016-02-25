var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
var modelPath = path.join(rootPath, 'server/model');
module.exports = {
    development: {

        rootPath: rootPath,
        modelPath: modelPath,
        host     : "localhost",
        user     : "root",
        password : "root",
        database : "eshop",
        connectionLimit: 50

    }
}