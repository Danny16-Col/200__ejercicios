/**## **Ejercicio 19 — JSON.stringify**
**Descripción:** Convertir un objeto a JSON.
**Objetivo:** Practicar conversión JSON.
**Ejemplo/Guía:** */

let Persona = {
    nombre:"Carlos",
    edad:23,
    estudiante:true

}

let personaJson = JSON.stringify(Persona);

console.log(personaJson);
