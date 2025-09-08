const Personas = [//declaramos un array de objetos

    {nombre : 'Carlos', apellido : 'Cortes',edad : 24},
    {nombre : 'Laura', apellido:'Garzon', edad:22},
    {nombre : 'Cristina', apellido:'Barrera', edad:52}

]
/**-------MAP------------
Es un método de los arrays.

Recorre cada elemento del array.

Aplica una función de transformación.

Devuelve un nuevo array con los resultados.

No modifica el original. */
let edades = Personas.map(p => p.edad);
console.log(`edad ${edades}`);
