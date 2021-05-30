let config = require('../config').pythonInfo;
//const sys = require('sys');
const axios = require('axios');
const BufferList = require('bufferlist').BufferList;

const url = `http://${config.host}:${config.port}/`;

async function getTest(path){
    let res = await axios.get(url+path);
    return res.data;
}
async function postTest(path, data){
    let res = await axios.post(url+path,data);
    return res.data;
}

module.exports = {
    getTest,
    postTest,
};