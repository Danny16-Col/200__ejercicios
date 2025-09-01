# Crear el contenido completo de los ejercicios 1-50 en formato Markdown
markdown_full = """# Plan de Estudios — Parte 1 (Ejercicios 1–50)

**Pila:** HTML, CSS, JavaScript (Frontend) · Node.js con Express (Backend) · MongoDB (Base de datos)  

**Sección 1: Fundamentos (JavaScript y JSON).**  

---

## Ejercicio 1 — Variables básicas
**Descripción:** Declara variables con `let`, `const` y `var`.  
**Objetivo:** Diferenciar entre los tres tipos de declaración de variables.  
**Ejemplo/Guía:**
```js
let nombre = "Daniel";
const edad = 24;
var ciudad = "Bogotá";
````

## **Ejercicio 2 — Operaciones matemáticas**
**Descripción:** Realiza operaciones básicas (+, -, *, /, %).
**Objetivo:** Practicar operadores aritméticos.
**Ejemplo/Guía:**
```js
let a = 10, b = 3;
console.log(a+b, a-b, a*b, a/b, a%b);
```

## **Ejercicio 3 — Concatenación de cadenas**
**Descripción:** Une dos cadenas de texto.
**Objetivo:** Usar + y template strings.
**Ejemplo/Guía:**
```js
let saludo = "Hola";
let nombre = "Daniel";
console.log(saludo + " " + nombre);
console.log(`${saludo} ${nombre}`);
```

## **Ejercicio 4 — Conversión de tipos**
**Descripción:** Convierte entre string, number y boolean.
**Objetivo:** Practicar parseInt, parseFloat y Boolean.
**Ejemplo/Guía:**
```js
let n = "42";
console.log(parseInt(n));
console.log(parseFloat("3.14"));
console.log(Boolean(0));
```


## **Ejercicio 5 — Condicional simple**
**Descripción:** Determina si un número es par o impar.
**Objetivo:** Practicar if/else.
**Ejemplo/Guía:**
```js
const n = 7; 
if(n % 2 === 0){
  console.log("par");
} else {
  console.log("impar");
}
```

## **Ejercicio 6 — Condicional múltiple**
**Descripción:** Verifica si un número es positivo, negativo o cero.
**Objetivo:** Practicar if / else if / else.
**Ejemplo/Guía:**
```js
let num = -5;
if(num > 0){
  console.log("positivo");
} else if(num < 0){
  console.log("negativo");
} else {
  console.log("cero");
}
```
## **Ejercicio 7 — Switch**
**Descripción:** Muestra el día de la semana según un número.
**Objetivo:** Practicar switch/case.
**Ejemplo/Guía:**
```js
let dia = 3;
switch(dia){
  case 1: console.log("Lunes"); break;
  case 2: console.log("Martes"); break;
  case 3: console.log("Miércoles"); break;
  default: console.log("Otro día");
}
```

## **Ejercicio 8 — Ciclo for**
**Descripción:** Imprime los números del 1 al 10.
**Objetivo:** Usar for.
**Ejemplo/Guía:**
```js
for(let i=1; i<=10; i++){
  console.log(i);
}
```

## **Ejercicio 9 — Ciclo while**
**Descripción:** Imprime los números del 10 al 1.
**Objetivo:** Usar while.
**Ejemplo/Guía:**
```js
let i = 10;
while(i >= 1){
  console.log(i);
  i--;
}
```

## **Ejercicio 10 — Ciclo do...while**
**Descripción:** Pide un número hasta que sea mayor a 0.
**Objetivo:** Usar do...while.
**Ejemplo/Guía:**
```js
let num;
do {
  num = parseInt(prompt("Ingrese un número positivo: "));
} while(num <= 0);
```

## **Ejercicio 11 — Función simple**
**Descripción:** Crear una función que sume dos números.
**Objetivo:** Practicar function.
**Ejemplo/Guía:**
```js
function sumar(a, b){
  return a + b;
}
console.log(sumar(5, 7));
```

## **Ejercicio 12 — Función flecha**
**Descripción:** Crear una función flecha que multiplique dos números.
**Objetivo:** Practicar funciones flecha.
**Ejemplo/Guía:**
```js
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4));
```

## **Ejercicio 13 — Arrays básicos**
**Descripción:** Crear un arreglo con 5 frutas.
**Objetivo:** Practicar arrays.
**Ejemplo/Guía:**
```js
let frutas = ["Manzana", "Banana", "Pera", "Mango", "Uva"];
console.log(frutas[0], frutas.length);
```

## **Ejercicio 14 — Recorrer un array**
**Descripción:** Mostrar los elementos de un array con un for.
**Objetivo:** Iterar arrays.
**Ejemplo/Guía:**

````js
Mostrar siempre los detalles

Copiar código
let numeros = [1,2,3,4,5];
for(let i=0; i<numeros.length; i++){
  console.log(numeros[i]);
}
````
## **Ejercicio 15 — Métodos de arrays**
**Descripción:** Usar push, pop, shift, unshift.
**Objetivo:** Manipular arrays.
**Ejemplo/Guía:**
```js
let colores = ["Rojo", "Azul"];
colores.push("Verde");
colores.pop();
colores.unshift("Amarillo");
colores.shift();
console.log(colores);
```

## **Ejercicio 16 — for...of**
**Descripción:** Recorre un array con for...of.
**Objetivo:** Usar for...of.
**Ejemplo/Guía:**
```js
let animales = ["Perro", "Gato", "Conejo"];
for(let animal of animales){
  console.log(animal);
}
```

## **Ejercicio 17 — Objetos básicos**
**Descripción:** Crear un objeto persona.
**Objetivo:** Practicar objetos.
**Ejemplo/Guía:**
```js
let persona = {
  nombre: "Daniel",
  edad: 24,
  ciudad: "Bogotá"
};
console.log(persona.nombre);
```

## **Ejercicio 18 — Recorrer un objeto**
**Descripción:** Mostrar las propiedades de un objeto con for...in.
**Objetivo:** Usar for...in.
**Ejemplo/Guía:**

````js
Mostrar siempre los detalles

Copiar código
for(let key in persona){
  console.log(key, persona[key]);
}
````
## **Ejercicio 19 — JSON.stringify**
**Descripción:** Convertir un objeto a JSON.
**Objetivo:** Practicar conversión JSON.
**Ejemplo/Guía:**
```js
let json = JSON.stringify(persona);
console.log(json);
```

## **Ejercicio 20 — JSON.parse**
**Descripción:** Convertir un JSON a objeto.
**Objetivo:** Practicar conversión JSON.
**Ejemplo/Guía:**
```js
let cadena = '{"nombre":"Ana","edad":30}';
let obj = JSON.parse(cadena);
console.log(obj.nombre);
```

## **Ejercicio 21 — Función con objeto**
**Descripción:** Crear una función que reciba un objeto y muestre sus valores.
**Objetivo:** Reforzar parámetros de objeto.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
function mostrarPersona(p){
  console.log(p.nombre, p.edad);
}
mostrarPersona({nombre:"Luis", edad:20});

## **Ejercicio 22 — Array de objetos**
**Descripción:** Crear un array con 3 personas.
**Objetivo:** Manejar arrays de objetos.
**Ejemplo/Guía:**
```js
let personas = [
  {nombre:"Ana", edad:20},
  {nombre:"Luis", edad:22},
  {nombre:"Sofía", edad:25}
];
console.log(personas[1].nombre);
```

## **Ejercicio 23 — Recorrer array de objetos**
**Descripción:** Mostrar todos los nombres de un array de objetos.
**Objetivo:** Iterar arrays de objetos.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
for(let p of personas){
  console.log(p.nombre);
}

## **Ejercicio 24 — map()**
**Descripción:** Crear un array con solo las edades usando map.
**Objetivo:** Practicar map.
**Ejemplo/Guía:**
```js
let edades = personas.map(p => p.edad);
console.log(edades);
```

## **Ejercicio 25 — filter()**
**Descripción:** Filtrar las personas mayores de 21 años.
**Objetivo:** Practicar filter.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let mayores = personas.filter(p => p.edad > 21);
console.log(mayores);

## **Ejercicio 26 — reduce()**
**Descripción:** Calcular la suma de todas las edades.
**Objetivo:** Practicar reduce.
**Ejemplo/Guía:**
```js
let suma = personas.reduce((acc, p) => acc + p.edad, 0);
console.log(suma);
```

## **Ejercicio 27 — find()**
**Descripción:** Buscar la persona con nombre "Sofía".
**Objetivo:** Practicar find.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let sofia = personas.find(p => p.nombre === "Sofía");
console.log(sofia);

## **Ejercicio 28 — some()**
**Descripción:** Verificar si existe alguien menor de 21.
**Objetivo:** Practicar some.
**Ejemplo/Guía:**
```js
console.log(personas.some(p => p.edad < 21));
```

## **Ejercicio 29 — every()**
**Descripción:** Verificar si todos tienen más de 18.
**Objetivo:** Practicar every.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
console.log(personas.every(p => p.edad > 18));

## **Ejercicio 30 — includes()**
**Descripción:** Verificar si un array contiene cierto valor.
**Objetivo:** Practicar includes.
**Ejemplo/Guía:**
```js
let numeros = [1,2,3,4,5];
console.log(numeros.includes(3));
```

## **Ejercicio 31 — sort()**
**Descripción:** Ordenar un array de números.
**Objetivo:** Practicar sort.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let nums = [5,2,8,1];
nums.sort((a,b)=>a-b);
console.log(nums);

## **Ejercicio 32 — reverse()**
**Descripción:** Invertir un array.
**Objetivo:** Practicar reverse.
**Ejemplo/Guía:**
```js
nums.reverse();
console.log(nums);
```

## **Ejercicio 33 — split() y join()**
**Descripción:** Convertir string a array y viceversa.
**Objetivo:** Practicar split y join.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let texto = "a,b,c";
let arr = texto.split(",");
console.log(arr.join("-"));

## **Ejercicio 34 — trim()**
**Descripción:** Quitar espacios de un string.
**Objetivo:** Practicar trim.
**Ejemplo/Guía:**
```js
let palabra = "  hola  ";
console.log(palabra.trim());
```

## **Ejercicio 35 — toUpperCase() / toLowerCase()**
**Descripción:** Convertir string a mayúsculas/minúsculas.
**Objetivo:** Practicar métodos de strings.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let s = "Hola";
console.log(s.toUpperCase(), s.toLowerCase());

## **Ejercicio 36 — substring()**
**Descripción:** Extraer parte de un string.
**Objetivo:** Practicar substring.
**Ejemplo/Guía:**
```js
let palabra = "Programación";
console.log(palabra.substring(0,7));
```

## **Ejercicio 37 — replace()**
**Descripción:** Reemplazar texto dentro de un string.
**Objetivo:** Practicar replace.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let frase = "Me gusta Java";
console.log(frase.replace("Java","JavaScript"));

## **Ejercicio 38 — startsWith() y endsWith()**
**Descripción:** Verificar inicio y fin de string.
**Objetivo:** Practicar validación de strings.
**Ejemplo/Guía:**
```js
let email = "user@gmail.com";
console.log(email.startsWith("user"));
console.log(email.endsWith(".com"));
```

## **Ejercicio 39 — includes() en string**
**Descripción:** Verificar si un string contiene un texto.
**Objetivo:** Practicar includes en strings.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let frase = "Aprendiendo JavaScript";
console.log(frase.includes("Java"));

## **Ejercicio 40 — Math.random()**
**Descripción:** Generar un número aleatorio entre 0 y 1.
**Objetivo:** Practicar Math.random.
**Ejemplo/Guía:**
```js
console.log(Math.random());
```

## **Ejercicio 41 — Número aleatorio entero**
**Descripción:** Generar un número aleatorio entre 1 y 10.
**Objetivo:** Usar Math.floor y Math.random.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let aleatorio = Math.floor(Math.random() * 10) + 1;
console.log(aleatorio);

## **Ejercicio 42 — Math.max() y Math.min()**
**Descripción:** Obtener el número mayor y menor.
**Objetivo:** Practicar funciones matemáticas.
**Ejemplo/Guía:**
```js
console.log(Math.max(3,7,1), Math.min(3,7,1));
```

## **Ejercicio 43 — Math.pow() y Math.sqrt()**
**Descripción:** Calcular potencia y raíz cuadrada.
**Objetivo:** Practicar pow y sqrt.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));

## **Ejercicio 44 — Date()**
**Descripción:** Mostrar la fecha y hora actual.
**Objetivo:** Practicar Date.
**Ejemplo/Guía:**
```js
let fecha = new Date();
console.log(fecha);
```

## **Ejercicio 45 — Métodos de Date**
**Descripción:** Obtener día, mes y año actual.
**Objetivo:** Practicar métodos de fecha.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let hoy = new Date();
console.log(hoy.getDate(), hoy.getMonth()+1, hoy.getFullYear());

## **Ejercicio 46 — setTimeout()**
**Descripción:** Ejecutar una función después de 2 segundos.
**Objetivo:** Practicar temporizadores.
**Ejemplo/Guía:**
```js
setTimeout(()=>console.log("Hola después de 2s"), 2000);
```

## **Ejercicio 47 — setInterval()**
**Descripción:** Ejecutar una función cada segundo.
**Objetivo:** Practicar intervalos.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
let contador = 0;
let intervalo = setInterval(()=>{
  console.log(contador++);
  if(contador > 5) clearInterval(intervalo);
}, 1000);

## **Ejercicio 48 — try...catch**
**Descripción:** Manejar un error con try/catch.
**Objetivo:** Practicar manejo de errores.
**Ejemplo/Guía:**
```js
try {
  throw new Error("Algo salió mal");
} catch(e) {
  console.log("Error:", e.message);
}
```

## **Ejercicio 49 — throw**
**Descripción:** Lanzar un error si un número es negativo.
**Objetivo:** Practicar throw.
**Ejemplo/Guía:**

js
Mostrar siempre los detalles

Copiar código
function validar(num){
  if(num < 0) throw new Error("Número negativo");
  return num;
}
console.log(validar(5));

## **Ejercicio 50 — Función asíncrona**
**Descripción:** Crear una función asíncrona con async/await.
**Objetivo:** Practicar funciones asíncronas.
**Ejemplo/Guía:**
```js
async function saludar(){
  return "Hola Async";
}
saludar().then(console.log);
```