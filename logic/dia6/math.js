console.log(Math.random().toFixed(0));//

console.log(Math.floor(Math.random() * 10) + 1);//numero aleatorio entre 1 y 10`
console.log(Math.max(5, 10, 15, 20, 25));//maximo
console.log(Math.min(5, 10, 15, 20, 25));//minimo
console.log(Math.sqrt(16));//raiz cuadrada
console.log(Math.pow(2, 3));//2 elevado a 3
let date = new Date();
console.log(date);//fecha actual
let date2 = new Date().toLocaleString();//fecha actual en formato legible
console.log(date2);//fecha actual en milisegundos
let date3 = new Date();
console.log(date3.getDate(), date3.getMonth() + 1, date3.getFullYear());//dia, mes y año actual

setTimeout(()=>console.log("Hola"),2000);//ejecuta la funcion despues de 2 segundos
let contador = 1;
let intervalo = setInterval(()=>{
    console.log(contador++);
    if(contador > 5) clearInterval(intervalo);

},1000);//ejecuta la funcion cada segundo hasta que contador sea mayor que 5