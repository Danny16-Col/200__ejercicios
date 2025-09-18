/**## **Ejercicio 23 — Recorrer array de objetos**
**Descripción:** Mostrar todos los nombres de un array de objetos.
**Objetivo:** Iterar arrays de objetos.
**Ejemplo/Guía:** */

let Persona = [
    {nombre : "Carlos" , edad : 24},
    {nombre : "Daniel" , edad : 25},
    {nombre : "Laura" , edad : 22}

]

for (let p of Persona){
    console.log(p.nombre,p.edad);
    
}