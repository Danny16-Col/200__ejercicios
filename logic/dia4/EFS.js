let Personas = [
    {nombre:"Daniel",edad:21},
    {nombre:"Carlos",edad:12},
    {nombre:"Cortes",edad:31}

]
/**busca el primero que cumpla la funcion y muestra todo el objeto */
let buscarF = Personas.find(p => p.nombre === "Cortes");
console.log(buscarF);
/**si alguno cumple devulve tru o false */
let buscarS = Personas.some(p => p.edad >18);
console.log(buscarS);
/**si alguno no cumple devuelve false  */
let buscarE = Personas.every(p => p.edad >18);
console.log(buscarE);

