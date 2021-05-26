const parser = require('dbf-js');

function readFile(path){
    return parser.read(path);
}

module.exports = {
    parser,
    readFile,
}