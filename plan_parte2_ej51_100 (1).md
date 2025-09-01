# Plan de Estudios — Parte 2 (Ejercicios 51–100)
## Sección: Peticiones HTTP y CRUD con Express (sin base de datos)

### Ejercicio 51 — Servidor básico con Express
- **Descripción:** Crea un servidor que responda 'Hola Express' en la ruta `/`.
- **Objetivo:** Familiarizarse con la instalación y arranque de un servidor Express.
- **Ejemplo/Guía:**
```js
import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req,res)=>res.send('Hola Express'));
app.listen(PORT, ()=>console.log(`Servidor en http://localhost:${PORT}`));
```

### Ejercicio 52 — Ruta con parámetros
- **Descripción:** Crea una ruta `/saludo/:nombre` que responda 'Hola, nombre'.
- **Objetivo:** Practicar parámetros de ruta en Express.
- **Ejemplo/Guía:**
```js
app.get('/saludo/:nombre',(req,res)=>{
  res.send(`Hola, ${req.params.nombre}`);
});
```

### Ejercicio 53 — Ruta con query string
- **Descripción:** Haz una ruta `/buscar` que reciba `?q=palabra` y devuelva la búsqueda.
- **Objetivo:** Practicar req.query.
- **Ejemplo/Guía:**
```js
app.get('/buscar',(req,res)=>{
  const q=req.query.q;
  res.send(`Buscando: ${q}`);
});
```

### Ejercicio 54 — Middleware logger
- **Descripción:** Implementa un middleware que muestre método y URL de cada petición.
- **Objetivo:** Entender app.use y next().
- **Ejemplo/Guía:**
```js
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
  next();
});
```

### Ejercicio 55 — Método POST básico
- **Descripción:** Crea una ruta POST `/enviar` que reciba JSON con nombre y lo devuelva.
- **Objetivo:** Practicar app.use(express.json()) y req.body.
- **Ejemplo/Guía:**
```js
app.use(express.json());
app.post('/enviar',(req,res)=>{
  res.json({mensaje:`Hola ${req.body.nombre}`});
});
```

### Ejercicio 56 — PUT básico
- **Descripción:** Crea una ruta PUT `/usuario/:id` que reciba un nuevo nombre y lo devuelva.
- **Objetivo:** Practicar actualización simulada.
- **Ejemplo/Guía:**
```js
app.put('/usuario/:id',(req,res)=>{
  res.json({id:req.params.id, nuevoNombre:req.body.nombre});
});
```

### Ejercicio 57 — DELETE básico
- **Descripción:** Crea una ruta DELETE `/usuario/:id` que confirme la eliminación.
- **Objetivo:** Practicar borrado simulado.
- **Ejemplo/Guía:**
```js
app.delete('/usuario/:id',(req,res)=>{
  res.json({mensaje:`Usuario ${req.params.id} eliminado`});
});
```

### Ejercicio 58 — Status codes
- **Descripción:** Envía un 201 al crear un recurso en POST.
- **Objetivo:** Aprender res.status().
- **Ejemplo/Guía:**
```js
app.post('/crear',(req,res)=>{
  res.status(201).json({id:1,nombre:req.body.nombre});
});
```

### Ejercicio 59 — Validar datos
- **Descripción:** Devuelve 400 si falta el campo nombre en POST.
- **Objetivo:** Validación básica.
- **Ejemplo/Guía:**
```js
app.post('/validar',(req,res)=>{
  if(!req.body.nombre){
    return res.status(400).json({error:'Falta nombre'});
  }
  res.json({ok:true});
});
```

### Ejercicio 60 — CRUD en memoria
- **Descripción:** Implementa un CRUD completo sobre un arreglo usuarios [{id,nombre}].
- **Objetivo:** Combinar GET, POST, PUT, DELETE con un arreglo.
- **Ejemplo/Guía:**
```js
let usuarios=[]; let nextId=1;
app.get('/usuarios',(req,res)=>res.json(usuarios));
app.post('/usuarios',(req,res)=>{
  const u={id:nextId++, nombre:req.body.nombre};
  usuarios.push(u); res.status(201).json(u);
});
app.put('/usuarios/:id',(req,res)=>{
  const u=usuarios.find(x=>x.id==req.params.id);
  if(!u) return res.sendStatus(404);
  u.nombre=req.body.nombre; res.json(u);
});
app.delete('/usuarios/:id',(req,res)=>{
  usuarios=usuarios.filter(x=>x.id!=req.params.id);
  res.json({ok:true});
});
```

### Ejercicio 61 — Middleware de tiempo
- **Descripción:** Agrega timestamp a req y muéstralo en la respuesta.
- **Objetivo:** Usar req.customProp en middleware.
- **Ejemplo/Guía:**
```js
app.use((req,res,next)=>{req.timestamp=Date.now(); next();});
app.get('/hora',(req,res)=>res.json({hora:req.timestamp}));
```

### Ejercicio 62 — Router separado
- **Descripción:** Crea un router `/api` con rutas dentro.
- **Objetivo:** Practicar express.Router().
- **Ejemplo/Guía:**
```js
import {Router} from 'express';
const router=Router();
router.get('/ping',(req,res)=>res.send('pong'));
app.use('/api',router);
```

### Ejercicio 63 — Middleware de error
- **Descripción:** Agrega un manejador que capture errores y devuelva JSON.
- **Objetivo:** Practicar app.use con 4 parámetros.
- **Ejemplo/Guía:**
```js
app.use((err,req,res,next)=>{
  console.error(err); res.status(500).json({error:'Error interno'});
});
```

### Ejercicio 64 — Archivos estáticos
- **Descripción:** Sirve archivos estáticos desde carpeta `public`.
- **Objetivo:** Practicar express.static.
- **Ejemplo/Guía:**
```js
app.use(express.static('public'));
```

### Ejercicio 65 — Rutas anidadas
- **Descripción:** Crea rutas `/productos/:id/comentarios`.
- **Objetivo:** Practicar parámetros múltiples.
- **Ejemplo/Guía:**
```js
app.get('/productos/:id/comentarios',(req,res)=>{
  res.send(`Comentarios del producto ${req.params.id}`);
});
```


## Ejercicios 56–100 (completados)

### Ejercicio 56 — API REST CRUD - Recursos 'books' (in-memory)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// server.js (extract)
import express from 'express';
const app = express();
app.use(express.json());
let books = []; // in-memory DB
app.get('/books',(req,res)=>res.json(books));
app.listen(3000);
```
### Ejercicio 57 — Crear book (POST) con validación simple
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.post('/books',(req,res)=>{
  const {title,author,price} = req.body;
  if(!title||!author) return res.status(400).json({error:'title y author son requeridos'});
  const book = {id:Date.now().toString(),title,author,price};
  books.push(book);
  res.status(201).json(book);
});
```
### Ejercicio 58 — Listar books (GET) con status codes adecuados
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books',(req,res)=>{
  if(books.length===0) return res.status(204).send(); // No content
  res.json(books);
});
```
### Ejercicio 59 — Obtener book por id (GET) y 404 si no existe
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books/:id',(req,res)=>{
  const b = books.find(x=>x.id===req.params.id);
  if(!b) return res.status(404).json({error:'No encontrado'});
  res.json(b);
});
```
### Ejercicio 60 — Actualizar book completo (PUT)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.put('/books/:id',(req,res)=>{
  const idx = books.findIndex(b=>b.id===req.params.id);
  if(idx===-1) return res.status(404).json({error:'No encontrado'});
  const {title,author,price} = req.body;
  books[idx] = {id:books[idx].id,title,author,price};
  res.json(books[idx]);
});
```
### Ejercicio 61 — Actualizar book parcial (PATCH)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.patch('/books/:id',(req,res)=>{
  const b = books.find(b=>b.id===req.params.id);
  if(!b) return res.status(404).json({error:'No encontrado'});
  Object.assign(b,req.body);
  res.json(b);
});
```
### Ejercicio 62 — Borrar book (DELETE) — eliminación física
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.delete('/books/:id',(req,res)=>{
  const lenBefore = books.length;
  books = books.filter(b=>b.id!==req.params.id);
  if(books.length===lenBefore) return res.status(404).json({error:'No encontrado'});
  res.status(204).send();
});
```
### Ejercicio 63 — Borrar book (DELETE) — eliminación lógica (soft delete)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.delete('/books/:id',(req,res)=>{
  const b = books.find(b=>b.id===req.params.id);
  if(!b) return res.status(404).json({error:'No encontrado'});
  b.deleted = true;
  res.json({ok:true});
});
```
### Ejercicio 64 — Filtrado por campo (GET ?author=...)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books',(req,res)=>{
  const {author} = req.query;
  const resu = author ? books.filter(b=>b.author===author) : books;
  res.json(resu);
});
```
### Ejercicio 65 — Búsqueda por texto (GET ?q=...)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books/search',(req,res)=>{
  const q = (req.query.q||'').toLowerCase();
  res.json(books.filter(b=> (b.title||'').toLowerCase().includes(q) || (b.author||'').toLowerCase().includes(q) ));
});
```
### Ejercicio 66 — Paginación (limit & page)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books',(req,res)=>{
  const limit = parseInt(req.query.limit)||10;
  const page = parseInt(req.query.page)||1;
  const start = (page-1)*limit;
  res.json({page,limit,total:books.length,data:books.slice(start,start+limit)});
});
```
### Ejercicio 67 — Ordenamiento (sort=price:asc)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books',(req,res)=>{
  const sort = req.query.sort||'';
  let data = [...books];
  if(sort){ const [field,dir]=sort.split(':'); data.sort((a,b)=> (a[field]||0)-(b[field]||0) * (dir==='desc'? -1:1)); }
  res.json(data);
});
```
### Ejercicio 68 — Manejo de errores centralizado (middleware)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// colocar al final
app.use((err,req,res,next)=>{
  console.error(err);
  res.status(500).json({error: err.message||'Error servidor'});
});
```
### Ejercicio 69 — Middleware de autenticación simulado
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
function auth(req,res,next){
  const token = req.headers['authorization'];
  if(token!=='Bearer secrettoken') return res.status(401).json({error:'No autorizado'});
  next();
}
app.get('/private',auth,(req,res)=>res.json({ok:true}));
```
### Ejercicio 70 — Middleware de autorización por rol
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
function permit(role){
  return (req,res,next)=>{
    const userRole = req.headers['x-role']||'guest';
    if(userRole!==role) return res.status(403).json({error:'Prohibido'});
    next();
  };
}
app.delete('/admin-only',permit('admin'),(req,res)=>res.json({deleted:true}));
```
### Ejercicio 71 — Uso de express.Router() y modularización de rutas
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// routes/books.js
import express from 'express';
const router = express.Router();
router.get('/',(req,res)=>res.send('books index'));
export default router;
// en server.js
import booksRouter from './routes/books.js';
app.use('/books',booksRouter);
```
### Ejercicio 72 — Separar controladores (controllers) y rutas
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// controllers/booksController.js
export const list=(req,res)=>res.json(books);
// routes/books.js import {list} from '../controllers/booksController.js'; router.get('/',list);
```
### Ejercicio 73 — Validación con Joi (o alternativa) - ejemplo básico
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// npm i joi
import Joi from 'joi';
const schema = Joi.object({title:Joi.string().required(),author:Joi.string().required()});
app.post('/books',(req,res)=>{
  const {error,value} = schema.validate(req.body);
  if(error) return res.status(400).json({error:error.message});
  // crear...
});
```
### Ejercicio 74 — Validación de esquemas y manejo de errores de validación
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
function validate(schema){
  return (req,res,next)=>{
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).json({error:error.message});
    next();
  };
}
app.post('/books',validate(schema),(req,res)=>{/* crear */});
```
### Ejercicio 75 — Protección contra CORS (usar cors) y ejemplo
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
import cors from 'cors';
app.use(cors({origin:'http://localhost:8080'})); // restringir origen
```
### Ejercicio 76 — Cabeceras de seguridad con helmet (uso básico)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
import helmet from 'helmet';
app.use(helmet());
```
### Ejercicio 77 — Límite de tamaño de body y manejo de errores
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.use(express.json({limit:'10kb'}));
// manejar error: SyntaxError al parsear JSON -> middleware de errores
```
### Ejercicio 78 — Rate limiting (express-rate-limit) - ejemplo básico
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
import rateLimit from 'express-rate-limit';
const limiter = rateLimit({windowMs:60*1000,max:30});
app.use(limiter);
```
### Ejercicio 79 — Registro de peticiones con morgan (o logger propio)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
import morgan from 'morgan';
app.use(morgan('dev'));
```
### Ejercicio 80 — Subida de archivos con multer - endpoint /upload
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
import multer from 'multer';
const upload = multer({dest:'uploads/'});
app.post('/upload',upload.single('file'),(req,res)=>res.json({file:req.file}));
```
### Ejercicio 81 — Descarga de archivo generado dinámicamente
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/export',(req,res)=>{
  const csv = 'id,title\n1,Hola';
  res.setHeader('Content-Type','text/csv');
  res.attachment('books.csv');
  res.send(csv);
});
```
### Ejercicio 82 — Endpoint que sirve HTML estático (render simple)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/home',(req,res)=>{
  res.send(`<html><body><h1>Home</h1></body></html>`);
});
```
### Ejercicio 83 — Simular latencia y respuestas asincrónicas
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/slow',(req,res)=>{
  setTimeout(()=>res.json({ok:true}),1000);
});
```
### Ejercicio 84 — Endpoints asíncronos con async/await y manejo de try/catch
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/async',async(req,res,next)=>{
  try{
    const data = await Promise.resolve({ok:true});
    res.json(data);
  }catch(e){ next(e); }
});
```
### Ejercicio 85 — Tests básicos con supertest (esqueleto)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// test/index.test.js
import request from 'supertest';
import app from '../server.js';
test('GET /books 200', async ()=>{
  const res = await request(app).get('/books');
  expect(res.statusCode).toBe(200);
});
```
### Ejercicio 86 — Documentar API con comments y ejemplos (README)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// README.md incluye ejemplos curl y routes list. Ejemplo: curl -X GET http://localhost:3000/books
```
### Ejercicio 87 — Implementar Caching básico en memoria (ej. map)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
const cache = new Map();
app.get('/cached',(req,res)=>{
  const key='allbooks';
  if(cache.has(key)) return res.json(cache.get(key));
  cache.set(key,books);
  res.json(books);
});
```
### Ejercicio 88 — Headers personalizados y versionado de API (/v1/books)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.use('/v1',routerV1);
app.use('/v2',routerV2);
// o usar header 'Accept' para versioning
```
### Ejercicio 89 — Implementar ETag sencillo para respuestas
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
import crypto from 'crypto';
app.get('/books',(req,res)=>{
  const body = JSON.stringify(books);
  const etag = crypto.createHash('md5').update(body).digest('hex');
  if(req.headers['if-none-match']===etag) return res.status(304).end();
  res.setHeader('ETag',etag);
  res.json(books);
});
```
### Ejercicio 90 — Endpoint para exportar datos en CSV
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books.csv',(req,res)=>{
  const rows = books.map(b=>`${b.id},${b.title}`).join('\n');
  res.setHeader('Content-Type','text/csv');
  res.send('id,title\n'+rows);
});
```
### Ejercicio 91 — Transformar respuestas JSON: HATEOAS simple
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books/:id',(req,res)=>{
  const b=books.find(x=>x.id===req.params.id);
  if(!b) return res.status(404).end();
  res.json({...b,links:{self:`/books/${b.id}`,list:'/books'}});
});
```
### Ejercicio 92 — Manejo de uploads grandes con streams
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// usar streams para guardar archivo y no cargar todo en memoria.
import fs from 'fs';
app.post('/stream-upload',(req,res)=>{
  const dest = fs.createWriteStream('uploads/large.bin');
  req.pipe(dest);
  req.on('end',()=>res.json({ok:true}));
});
```
### Ejercicio 93 — Health check endpoint y readiness probe
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/health', (req,res)=>res.json({uptime:process.uptime(),ok:true}));
```
### Ejercicio 94 — Implementar middleware para validar Content-Type
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
function requireJson(req,res,next){
  if(!req.is('application/json')) return res.status(415).json({error:'Content-Type debe ser application/json'});
  next();
}
app.post('/json-only',requireJson,(req,res)=>res.json({ok:true}));
```
### Ejercicio 95 — Endpoint para bulk insert (varios registros en POST)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.post('/books/bulk',(req,res)=>{
  const items = req.body; // esperar array
  const created = items.map(it=>({...it,id:Date.now()+Math.random()}));
  books.push(...created);
  res.status(201).json({created:created.length});
});
```
### Ejercicio 96 — Rollback simulado en operaciones múltiples (transacción lógica)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.post('/transfer',(req,res)=>{
  const actions = [];
  try{
    // ejecutar pasos y push a actions para revertir
    // si falla: throw new Error('fail');
    res.json({ok:true});
  }catch(e){
    // revertir con actions.reverse()
    res.status(500).json({error:e.message});
  }
});
```
### Ejercicio 97 — Separar rutas públicas y privadas (grupo)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
const publicR = express.Router(); const privateR = express.Router();
privateR.use(auth); app.use('/api',publicR); app.use('/api',privateR);
```
### Ejercicio 98 — Mecanismo de paginación cursor-based (ejemplo)
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
app.get('/books/cursor',(req,res)=>{
  const cursor = req.query.cursor; // id last seen
  const start = cursor ? books.findIndex(b=>b.id===cursor)+1 : 0;
  res.json({data:books.slice(start,start+10),next: books[start+10]?.id || null});
});
```
### Ejercicio 99 — Implementar rate limit por IP y por route
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
const limiterForAuth = rateLimit({windowMs:60*1000,max:5});
app.use('/login',limiterForAuth);
```
### Ejercicio 100 — Pruebas de integración: flujo crear->listar->borrar
- **Descripción:** Implementar y probar la funcionalidad en un servidor Express usando almacenamiento en memoria (array/objeto).
- **Objetivo:** Practicar el patrón REST, estados HTTP, middlewares, validaciones y organización de código.
- **Ejemplo/Guía:**
```js
// pseudocódigo
// 1. POST /books -> obtener id
// 2. GET /books/:id -> comprobar
// 3. DELETE /books/:id -> comprobar 204
// usar supertest para automatizar
```
