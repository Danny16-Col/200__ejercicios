/**## **Ejercicio 15 — Métodos de arrays**
**Descripción:** Usar push, pop, shift, unshift.
**Objetivo:** Manipular arrays.
**Ejemplo/Guía:** */
const colores = ["azul","amarillo","verde","rojo"];

colores.push("cafe");//subir el array

console.log(colores);

colores.pop();//eliminr el ultimo
console.log(colores);

colores.shift();//eliminar el primero
console.log(colores);

colores.unshift("rosado");//agregar al inicio
console.log(colores);

colores.splice(3);//eliminar una posicion 
console.log(colores);
