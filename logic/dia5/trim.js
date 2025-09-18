let string = "    hola    ";

console.log(string);

console.log(string.trim());//quitar espacion
console.log(string.toUpperCase());//letras en mayuscula
string = string.toLowerCase();//letras en minuscula
console.log(string);

let sub = string.trim()
/**extraer una frase string en posicion incial y final */
console.log(sub.substring(2,3));
/**remplazar una frase  */
/**remplazar un string donde el primer parametro es la palabra que va a
 * remplazar y se remplaza por su segundo parametro
 */
console.log(string.replace("hola","hola mundo"));

let correo = "carlosdacario@gmail.es" 
/**estos metodos, compara el incio y el fin de un string para comparar el 
 * `parametro y devuelve un true o false
 */
console.log(correo.startsWith("car"));
console.log(correo.endsWith(".com")||correo.endsWith(".es"));
/**incluides() verifica si en todo el string esta el parametro
 * y devuelve un true o false
 */
console.log(correo.includes("daca"));


