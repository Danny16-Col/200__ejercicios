/**Recorre el array de principio a fin.
Busca el primer elemento que cumpla una condición.
Si lo encuentra, lo devuelve (el objeto completo).
Si no lo encuentra, devuelve undefined. */

let Personas = [
    {nombre:"Daniel", edad:21},
    {nombre:"Laura", edad:21},
    {nombre:"Carlos", edad:21},
    {nombre:"Camila", edad:21}

]


let buscar = Personas.find(p => p.nombre==="Laura");

console.log(buscar);
