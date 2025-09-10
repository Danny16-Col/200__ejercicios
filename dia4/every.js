const Animales = [
    {nombre:"Daniel",edad:23},
    {nombre:"Carlos",edad:22},
    {nombre:"Cristian",edad:18}

]


let buscar = Animales.every(p=>p.edad>= 18);

console.log(buscar);
/**este metodo verifica si todo el objeto cumple con la condicion y deeulve un boleano */