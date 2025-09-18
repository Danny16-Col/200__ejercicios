let num = [10,25,3,4,5,6];
let nom = ["Daniel","Carlos","Cortes"]
/**verificamos si el valor selecionado esta en el array y devueve un booleano */
console.log(num.includes(5));

console.log(nom.includes("Carlos"));
/**este metodo organiza un array de manera decendiente ya que resta ejm: a=2 y b=3 entonces si da
 * negtivo significa que 2 va antes que 3
 */
console.log(num.sort((a,b)=>a-b));
//console.log(num.sort((a,b)=>a+b));

console.log(num.reverse());//reverse()metodo para mostar array alreves
console.log(nom.reverse());
console.log(nom.join(","));//convierte un array en estring
let arr = nom.join(",").split(",");//convierte un string lo separa y luego lo vuelve a convertir en un array
console.log(arr);



