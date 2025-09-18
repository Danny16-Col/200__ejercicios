const personas = [
    {nombre:"Daniel",edad:23,estudiante:true},
    {nombre:"Carlos",edad:13,estudiante:true},
    {nombre:"cortes",edad:53,estudiante:true}

]

let buscarPorEdad = personas.some(p => p.edad<25);

console.log(buscarPorEdad);
console.log(personas.some(p => p.edad<25));

/**some() es un metodo que verifica si algun valor 
 * del objeto cumple con los requisitos y devuelve 
 * true
 */
