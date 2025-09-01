let json = '{"nombre":"Carlos","edad":24,"estudiante":true}';

let obj = JSON.parse(json);

for(let i in obj){
    console.log(i, obj[i]);
}