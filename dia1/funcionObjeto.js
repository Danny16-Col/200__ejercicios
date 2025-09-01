/**## **Ejercicio 21 — Función con objeto**
**Descripción:** Crear una función que reciba un objeto y muestre sus valores.
**Objetivo:** Reforzar parámetros de objeto.
**Ejemplo/Guía:** */

let Persona = {
    nombre:"Carlos",
    edad:24,
    estudiante:true
}

function mostrarObjeto(text){
    let text = '';
    for (let i in Persona){
        text = (i,Persona[i]);
        
    }


}

console.log(`esto es un objeto en funcion: ${mostrarObjeto(text)}`);
