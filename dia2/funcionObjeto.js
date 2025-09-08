/**## **Ejercicio 21 — Función con objeto**
**Descripción:** Crear una función que reciba un objeto y muestre sus valores.
**Objetivo:** Reforzar parámetros de objeto.
**Ejemplo/Guía:** */


// Definición del objeto
let Persona = {
    nombre: "Carlos",
    edad: 24,
    estudiante: true
};

let Anamiales = {
    especie:"perro",
    edad: 12,
    nombre : "loky"

}

// Función que recibe un objeto y muestra sus valores
function mostrarObjeto(obj) {
    let text = '';
    for (let key in obj) {
        text += obj[key] + ' ';
    }
    return text.trim();
}


console.log(`Esto es un objeto en función: ${mostrarObjeto(Persona)}`);
console.log(mostrarObjeto(Anamiales));

