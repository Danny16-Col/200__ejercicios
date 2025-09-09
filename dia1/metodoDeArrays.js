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

colores.splice(3);//cuando solo se indiica una posicion elimina todo lo que esta de ahi para atrs
console.log(colores);



let animales = ["loro","perro","gato","caballo","leon",];

animales.push("tigre");
console.log(animales);

animales.splice(2,1);
console.log(animales);


