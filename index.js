const python = require('./modules/pythonM');
const config = require('./config');
//const {head,data} = require('./modules/dbfParser').readFile(config.sourceInfo.path);

// python.getTest('/delete-table?table_name=Daegue').then((res)=>{
//     console.log(res);
// });

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

// const keys = Object.keys(data[0]).slice(2);
// let idx=0;
// let tester = 1;
// const timer = setInterval(()=>{
//     let items = [];
//     for(let i=0; i<100;i++){
//         let item = {};
//         item['ID:UFID'] = data[idx]['UFID'];
//         item['ID:BLD_NM'] = data[idx]['BLD_NM'];
//         item['ID:DONG_NM'] = data[idx]['DONG_NM'];
//         for(let j=3; j<keys.length; j++){
//             item['DATA:'+keys[j]] = data[idx][keys[j]].toString();
//         }
//         items.push(item);
//         idx += 1;
//         if (idx == data.length){
//             clearInterval(timer);
//             break;
//         }
//     }
//     python.postTest('/put-rows',{
//         'table_name' : 'Daegue',
//         'data' : items,
//     }).then((res)=>{
//         console.log(tester);
//         tester += 1;
//     });
// },1000);

python.postTest('/scan',{
     'table' : 'Daegue',
     'filter' : "SingleColumnValueFilter ('ID','BLD_NM',=,'경북대학교')",
}).then((res)=>{
     console.log(res);
});
