let config = require('../config').pythonInfo;

const url = `http://${config.host}:${config.port}/`;

async function getTest(){
    let res = await fetch(`${url}/hello`,{
        method:'POST',
        body:{"test":"test"}});
    res = await res.json();
    console.log(res);
}

module.exports = {
    getTest,
};