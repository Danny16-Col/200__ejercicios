let Personas = [
    {nombre:"Laura", edad:24},
    {nombre:"Carlos", edad:22},
    {nombre:"Daniel", edad:20}

]

let edades = Personas.filter(p => p.edad > 21);//filter() filtra el array de objeto y devulve true o false si cumple, luego guarda en la variable el nuevo array

console.log(`edades mayores  a 21 ${JSON.stringify(edades)}`);

