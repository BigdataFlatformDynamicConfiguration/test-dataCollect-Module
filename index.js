const python = require('./modules/pythonM');
const config = require('./config');
const {head,data} = require('./modules/dbfParser').readFile(config.sourceInfo.path);

for(let i=0; i<data.length; i++){
    console.log(i);
    console.log(data[i]);   
}
