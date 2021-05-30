const python = require('./modules/pythonM');
const config = require('./config');
const {head,data} = require('./modules/dbfParser').readFile(config.sourceInfo.path);

// python.postTest('/create-table',{
//      'table_name' : 'Daegue',
//      'column_family_name' : {
//          'ID': {},
//          'DATA': {},
//      }
// }).then((res)=>{
//      console.log(res);
// });

// python.getTest('/table-list').then((res)=>{
//     console.log(res);
// });

const keys = Object.keys(data[0]).slice(2);
let j=0;
let items = [];
for(let i=0; i< data.length; i++){
    let item = {};
    item['ID:UFID'] = data[i]['UFID'];
    item['ID:BLD_NM'] = data[i]['BLD_NM'];
    item['ID:DONG_NM'] = data[i]['DONG_NM'];
    for(let j=3; j<keys.length; j++){
        item['DATA:'+keys[j]] = data[i][keys[j]];
    }
    j += 1;
    items.push(item);
    if (j == 10){
        python.postTest('/put-rows',{
             'table_name' : 'Daegue',
             'data' : items,
        }).then((res)=>{
             console.log(i);
        });
        //console.log(items);
        j = 0;
        items = [];
    }
}
