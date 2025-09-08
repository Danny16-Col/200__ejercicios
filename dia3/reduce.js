//.reduce() sirve para reducir un array a un solo valor (un número, un string, un objeto, lo que quieras).
let Personas = [
    {nombre:"Carlos",edad:20},
    {nombre:"Daniel",edad:25},
    {nombre:"Laura",edad:30},
    {nombre:"Camilo",edad:15}

]
//acc (acumulador)= va guardando el resultado parcial en cada vuelta.
//p (elemto actual) = es la persona que está recorriendo en ese momento.
//0 indice inicial
let suma = Personas.reduce((acc,p) => acc + p.edad, 0);
console.log(suma);
