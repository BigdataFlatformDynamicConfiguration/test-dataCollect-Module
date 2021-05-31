const python = require('./modules/pythonM');
const config = require('./config');
const parser = require("xlsx");

// let excel = parser.readFile(config.sourceInfo.path);
// let data = excel.Sheets["F_FAC_BUILDING_27_202105"];

// console.log(data['B6']);

// python.getTest('/').then((res)=>{
//     console.log(res);
// });

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

// function emptyChecker(item, value, target){
//     if (value != undefined)
//         item[target] = value['v'].toString();
// }

// const cols = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
// const keys = cols.map(i=>{
//     return data[i+'1']['v'];
// });
// let idx=2;
// let tester = 1;
// const timer = setInterval(()=>{
//     let items = [];
//     for(let i=0; i<100;i++){
//         let item = {};
//         emptyChecker(item,data['A'+idx],'ID:UFID');
//         emptyChecker(item,data['B'+idx],'ID:BLD_NM');
//         emptyChecker(item,data['C'+idx],'ID:DONG_NM');
//         for(let j=3; j<keys.length; j++){
//             emptyChecker(item,data[cols[j]+idx],'DATA:'+keys[j]);
//         }
//         if (Object.keys(item).length == 0){
//             console.log('end');
//             clearInterval(timer);
//             break;
//         }
//         console.log(idx);
//         items.push(item);
//         idx += 1;
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
     'filter' : "SingleColumnValueFilter('ID','BLD_NM',=,'binary:경북대학교',true,true)",
}).then((res)=>{
     console.log(res);
});
// console.log(escape("경북대학교"))
