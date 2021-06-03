const python = require('./modules/pythonM');
const config = require('./config');
const parser = require("xlsx");

let excel = parser.readFile(config.sourceInfo.path);
let data = excel.Sheets["F_FAC_BUILDING_27_202105"];

// console.log(data['B6']);

// python.getTest('/').then((res)=>{
//     console.log(res);
// });

// python.getTest('/delete-table?table_name=Daegue_data').then((res)=>{
//     console.log(res);
// });

// python.postTest('/create-table',{
//      'table_name' : 'Daegue_data',
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

function emptyChecker(item, value, target){
    if (value != undefined)
        item[target] = value['v'].toString();
}

const cols = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
const keys = cols.map(i=>{
    return data[i+'1']['v'];
});
let idx=2;
let tester = 1;
const timer = setInterval(()=>{
    let items = [];
    for(let i=0; i<10000;i++){
        let item = {};
        emptyChecker(item,data['A'+idx],'ID:UFID');
        emptyChecker(item,data['B'+idx],'ID:BLD_NM');
        emptyChecker(item,data['C'+idx],'ID:DONG_NM');
        for(let j=3; j<keys.length; j++){
            emptyChecker(item,data[cols[j]+idx],'DATA:'+keys[j]);
        }
        if (Object.keys(item).length == 0){//Object.keys(item).length == 0 
            console.log('end');
            clearInterval(timer);
            break;
        }
        console.log(idx);
        items.push(item);
        idx += 1;
    }
    python.postTest('/put-rows',{
        'table_name' : 'Daegue_data',
        'data' : JSON.stringify(items)
    }).then((res)=>{
        console.log(res);
        tester += 1;
    });
},10000);

// item = {
//      'ID:UFID': '1970168435422654774600000000', 
//      'DATA:GRND_FLR': '1', 
//      'DATA:UGRND_FLR': '0', 
//      'DATA:PNU': '2714011000110000049', 
//      'DATA:ARCHAREA': '33.12', 
//      'DATA:TOTALAREA': '33.12', 
//      'DATA:PLATAREA': '0', 
//      'DATA:HEIGHT': '0', 
//      'DATA:STRCT_CD': '0', 
//      'DATA:BC_RAT': '0', 
//      'DATA:VL_RAT': '0', 
//      'DATA:BLDRGST_PK': '900000517', 
//      'DATA:USEAPR_DAY': '19700101', 
//      'DATA:REGIST_DAY': '20100127', 
//      'DATA:GB_CD': '0', 
//      'DATA:GEOIDN': 'B00100000004GKPAH', 
//      'DATA:BD_MGT_SN': '2714011000110000049006523', 
//      'DATA:SGG_OID': '66022', 
//      'DATA:COL_ADM_SE': '27140'}
// python.postTest('/put-rows',{
//      'table_name' : 'Daegue_data',
//      'data' : [item],
//  }).then((res)=>{
//      console.log(res);
//  });

// python.postTest('/scan',{
//      'table' : 'Daegue',
//      'filter' : "SingleColumnValueFilter('ID','BLD_NM',=,'regexstring:경북대학교',true,true)",
// }).then((res)=>{
//      console.log(res);
// });
// console.log(escape("경북대학교"))
