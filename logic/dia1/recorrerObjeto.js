/**## **Ejercicio 18 — Recorrer un objeto**
**Descripción:** Mostrar las propiedades de un objeto con for...in.
**Objetivo:** Usar for...in.
**Ejemplo/Guía:** */
let Persona = {
    nombre:"Carlos",
    edad:24,
    estudiante: true

}
for (let i in Persona) {
    console.log(`${i}: ${Persona[i]}`);
    
}


