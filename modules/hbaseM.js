let config = require('../config');
let axios = require('axios');

const url = `http://${config['hbase-host']}:${config['REST-port']}/`;

async function getClusterStatus(){
    try{
        return await axios.get(url+`version/cluster`,{
            "Accept" : "application/json"
        });
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    getClusterStatus
};