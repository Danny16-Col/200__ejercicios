/**## **Ejercicio 17 — Objetos básicos**
**Descripción:** Crear un objeto persona.
**Objetivo:** Practicar objetos.
**Ejemplo/Guía:** */

let Persona = {

    nombre: "Daniel",
    apellido: "Cortes",
    edad:24,
    profesion:"ING"


};

console.log(`mi nombre es: ${Persona.nombre}`);


let animales = {
    nombre: "Lufy",
    edad:23,
    mascota:true

}

for(let i in animales){
    console.log(i,animales[i]);
    
}

