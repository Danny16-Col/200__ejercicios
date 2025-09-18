let json = '{"nombre":"Carlos","edad":24,"estudiante":true}';

let obj = JSON.parse(json);//de json a objeto

for(let i in obj){
    console.log(i, obj[i]);
}

let json2 = '{"nombre":"rufus","edad":23}';

let objeto = JSON.parse(json2);

for(let i in objeto){
    console.log(i,objeto[i]);
    
}