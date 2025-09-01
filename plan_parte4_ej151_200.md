# Parte 4: Proyecto Final y Optimización (Ejercicios 151–200)

Formato: Cada ejercicio incluye **Descripción**, **Objetivo** y **Ejemplo/Guía (solución completa o plantilla lista para ejecutar)**.

Stack: HTML/CSS/JS frontend · Node.js + Express backend · MongoDB (Mongoose)

---

## Ejercicio 151 — Proyecto base: CRUD de 'Tasks' (esqueleto full-stack)

- **Descripción:** Montar un proyecto con carpeta `client/` y `server/`. Backend en Express con endpoints CRUD para `tasks`. Frontend HTML+JS que consuma la API.

- **Objetivo:** Objetivo: Tener una app mínima full-stack funcionando localmente.

Ejemplo/Guía:
- server/package.json: `npm init -y` + `npm i express mongoose cors dotenv`
- server/server.js (simple):
```js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Schema y modelo
const taskSchema = new mongoose.Schema({ title: String, done: Boolean }, { timestamps: true });
const Task = mongoose.model('Task', taskSchema);

// CRUD
app.get('/tasks', async (req,res)=>{ const tasks = await Task.find(); res.json(tasks); });
app.post('/tasks', async (req,res)=>{ const t = await Task.create(req.body); res.status(201).json(t); });
app.put('/tasks/:id', async (req,res)=>{ const t = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true }); res.json(t); });
app.delete('/tasks/:id', async (req,res)=>{ await Task.findByIdAndDelete(req.params.id); res.status(204).end(); });

// Conexión y arranque
mongoose.connect(process.env.MONGO_URI).then(()=>{
  app.listen(3000, ()=>console.log('Server en 3000'));
});
```
- client/index.html: fetch a `/tasks` y mostrar lista con agregar/eliminar.



---

## Ejercicio 152 — Frontend: consumir GET /tasks y mostrar lista

- **Descripción:** Crear `index.html` con JavaScript que haga `fetch('/tasks')` y renderice tareas.

- **Objetivo:** Objetivo: Aprender fetch y actualización del DOM.

Ejemplo:
```html
<!-- client/index.html -->
<ul id="tasks"></ul>
<script>
async function load(){
  const res = await fetch('http://localhost:3000/tasks');
  const tasks = await res.json();
  const ul = document.getElementById('tasks'); ul.innerHTML='';
  tasks.forEach(t=>{ const li = document.createElement('li'); li.textContent = t.title; ul.appendChild(li); });
}
load();
</script>
```



---

## Ejercicio 153 — POST desde frontend: crear tarea

- **Descripción:** Crear formulario para enviar nueva tarea a `POST /tasks` usando fetch con JSON.

- **Objetivo:** Objetivo: Practicar POST y body JSON.

Ejemplo:
```js
document.getElementById('form').addEventListener('submit', async e=>{
  e.preventDefault();
  const title = document.getElementById('title').value;
  await fetch('http://localhost:3000/tasks',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title, done:false}) });
  load();
});
```



---

## Ejercicio 154 — PUT/PATCH desde frontend: marcar tarea completa

- **Descripción:** Implementar botón que haga `PUT /tasks/:id` (o PATCH) para actualizar `done:true`.

- **Objetivo:** Objetivo: Actualizar recursos desde el cliente.

Ejemplo:
```js
await fetch(`http://localhost:3000/tasks/${id}`,{ method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify({done:true}) });
```



---

## Ejercicio 155 — Validaciones básicas en backend

- **Descripción:** Agregar validaciones en el modelo: title requerido y length min.

- **Objetivo:** Objetivo: Evitar datos inválidos en la DB.

Guía:
```js
const taskSchema = new mongoose.Schema({ title: { type: String, required: true, minlength: 3 }, done: { type: Boolean, default:false } });
```
Luego capturar errores de validación en un `try/catch` y devolver 400 con `err.message`.



---

## Ejercicio 156 — Manejo de errores centralizado (Express)

- **Descripción:** Crear middleware de error y usar `next(err)` en rutas asincrónicas.

- **Objetivo:** Objetivo: Centralizar respuestas de error.

Ejemplo:
```js
app.use((err,req,res,next)=>{
  console.error(err);
  res.status(err.status||500).json({error: err.message});
});
```
En rutas: `catch(e){ next(e) }`.



---

## Ejercicio 157 — Autenticación simple (JWT) - backend

- **Descripción:** Implementar registro/login minimal usando JWT (sin refresh tokens).

- **Objetivo:** Objetivo: Entender flujo auth y proteger rutas.

Guía:
- `npm i jsonwebtoken bcryptjs`
- Al registrar: `const hash = await bcrypt.hash(password,10)` y `User.create({email, password:hash})`.
- Al login: `const ok = await bcrypt.compare(pwd, user.password)` → `jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'1h'})`.
- Middleware `auth` que verifica `Authorization: Bearer TOKEN` con `jwt.verify()`.



---

## Ejercicio 158 — Proteger rutas con auth middleware

- **Descripción:** Aplicar middleware que exige token para acceder a `/tasks` (ejemplo).

- **Objetivo:** Objetivo: Asegurar endpoints.

Guía:
```js
function auth(req,res,next){ const h = req.headers.authorization; if(!h) return res.status(401).end(); const token = h.split(' ')[1]; try{ const payload = jwt.verify(token, process.env.JWT_SECRET); req.userId = payload.id; next(); }catch(e){ return res.status(401).json({error:'token inválido'});} }
app.use('/tasks', auth, tasksRouter);
```



---

## Ejercicio 159 — Roles y autorización sencilla

- **Descripción:** Agregar campo `role` en usuario y middleware `permit(role)` para endpoints admin.

- **Objetivo:** Objetivo: Controlar accesos por rol.

Comando/función clave: comprobar `req.user.role` y devolver 403 si no coincide.



---

## Ejercicio 160 — Logout y manejo de tokens (client-side)

- **Descripción:** Implementar logout en frontend eliminando token (localStorage) y proteger UI.

- **Objetivo:** Objetivo: Manejar sesión en cliente.

Guía: `localStorage.removeItem('token')` y redirigir a login.



---

## Ejercicio 161 — Middleware de sanitización para prevenir NoSQL injection

- **Descripción:** Usar librería que reemplace `$` y `.` en objetos recibidos o sanitizar manualmente.

- **Objetivo:** Objetivo: Prevenir inyección en queries.

Librería: `express-mongo-sanitize` o función que filtre keys empezando por `$`.



---

## Ejercicio 162 — Usar helmet y cors en producción

- **Descripción:** Configurar `helmet()` y `cors()` con opciones seguras.

- **Objetivo:** Objetivo: Mejorar seguridad HTTP.

Comandos: `app.use(helmet()); app.use(cors({origin: 'https://tu-dominio.com'}))`



---

## Ejercicio 163 — Paginación en backend con query params

- **Descripción:** Implementar `?page=&limit=` en `GET /tasks` usando `.skip()` y `.limit()`.

- **Objetivo:** Función: `Model.find().skip((page-1)*limit).limit(limit)`



---

## Ejercicio 164 — Índices en Mongoose para optimizar búsquedas

- **Descripción:** Crear índice en campo `title` y `createdAt`.

- **Objetivo:** Función: `schema.index({ title: 1 }); schema.index({ createdAt: -1 });`



---

## Ejercicio 165 — Búsqueda de texto con índices

- **Descripción:** Habilitar índice de texto y usar `$text` en consultas.

- **Objetivo:** Comando: `schema.index({ title: 'text', description: 'text' })` → `Model.find({ $text: { $search: 'palabra' } })`



---

## Ejercicio 166 — Operaciones en lote (bulkWrite)

- **Descripción:** Usar `Model.bulkWrite()` para upserts o actualizaciones masivas.

- **Objetivo:** Función clave: `Model.bulkWrite([{ updateOne: { filter:{...}, update:{...}, upsert:true } }])`



---

## Ejercicio 167 — Transacciones con sesiones (MongoDB replica set required)

- **Descripción:** Ejecutar varias operaciones como una transacción con `session.startTransaction()`.

- **Objetivo:** Función clave:
```js
const session = await mongoose.startSession();
await session.withTransaction(async ()=>{ // operaciones usando { session } });
session.endSession();
```



---

## Ejercicio 168 — Optimizar payload: lean() en consultas de solo lectura

- **Descripción:** Usar `.lean()` para evitar instanciar documentos Mongoose cuando no se necesita.

- **Objetivo:** Función: `Model.find().lean()`



---

## Ejercicio 169 — Proyección de campos para reducir ancho de banda

- **Descripción:** Usar `.select()` para traer solo campos necesarios.

- **Objetivo:** Función: `Model.find().select('title done')`



---

## Ejercicio 170 — Cache con Redis (esquema) — solo guía

- **Descripción:** Agregar cache entre DB y servidor para endpoints de lectura frecuente.

- **Objetivo:** Comando/función: `redis.get(key)` / `redis.set(key, JSON.stringify(data), 'EX', 60)` (requiere Redis).



---

## Ejercicio 171 — Rate-limit por usuario (endpoints sensibles)

- **Descripción:** Aplicar `express-rate-limit` en rutas como login.

- **Objetivo:** Función: `rateLimit({ windowMs:60*1000, max:5 })` y usar en `/auth/login`.



---

## Ejercicio 172 — Auditoría con hooks de Mongoose

- **Descripción:** Usar `schema.pre('save')` y `schema.post('save')` para registrar cambios.

- **Objetivo:** Función: `schema.pre('save', function(next){ this._wasNew = this.isNew; next(); })`



---

## Ejercicio 173 — Soft delete (isDeleted + timestamps)

- **Descripción:** Implementar flag `deleted` en esquema y sobrescribir queries para excluir borrados.

- **Objetivo:** Guía: `schema.add({ deleted: { type:Boolean, default:false } })` y usar `Model.find({ deleted:false })`.



---

## Ejercicio 174 — Backup/export de colección a JSON/CSV (script)

- **Descripción:** Crear script Node que exporte documentos a archivo JSON o CSV.

- **Objetivo:** Función/paquete: `fs.writeFileSync('export.json', JSON.stringify(await Model.find()))` o usar `json2csv`.



---

## Ejercicio 175 — Monitorización básica: métricas de consultas lentas

- **Descripción:** Registrar duración de consultas y endpoints lentos.

- **Objetivo:** Guía: medir `const start=Date.now()` antes de query y `Date.now()-start` después; loguear si > threshold.



---

## Ejercicio 176 — Testing unitario para modelos Mongoose (esqueleto)

- **Descripción:** Escribir tests que creen/leerá documentos usando una base de datos en memoria (mongodb-memory-server).

- **Objetivo:** Paquete: `mongodb-memory-server` + `jest` o `mocha`. Función: arrancar in-memory server para tests.



---

## Ejercicio 177 — CI: script para correr tests y lint

- **Descripción:** Agregar `npm test` y `npm run lint` en pipeline.

- **Objetivo:** Ejemplo package.json scripts: `"test":"jest", "lint":"eslint ."`



---

## Ejercicio 178 — Validaciones personalizadas en esquema

- **Descripción:** Crear validator async para comprobar unicidad por campo antes de guardar.

- **Objetivo:** Función: `schema.path('email').validate(async function(value){ const count = await this.constructor.countDocuments({email:value}); return !count; }, 'Email ya existe')`



---

## Ejercicio 179 — Optimizar consultas con explain()

- **Descripción:** Usar `.explain('executionStats')` para analizar plan de consulta.

- **Objetivo:** Función: `await Model.find({ ... }).explain('executionStats')`



---

## Ejercicio 180 — Protección de datos sensibles en salida (toJSON)

- **Descripción:** Modificar `schema.set('toJSON', { transform(doc,ret){ delete ret.password; return ret; }})`

- **Objetivo:** Función: `schema.set('toJSON', { transform... })`



---

## Ejercicio 181 — Email service (esquema de integración)

- **Descripción:** Configurar envío de emails (nodemailer) para confirmaciones.

- **Objetivo:** Función: `nodemailer.createTransport()` y enviar en eventos (registro).



---

## Ejercicio 182 — File storage: guardar metadatos en Mongo y archivo en Disco/S3 (esquema)

- **Descripción:** Guardar info del archivo en documento y el archivo en almacenamiento externo.

- **Objetivo:** Guía: multer guarda archivo y `Model.create({ filename, url, size })`.



---

## Ejercicio 183 — Webhooks: recibir y verificar firma

- **Descripción:** Crear endpoint que reciba webhook y verifique HMAC con secret.

- **Objetivo:** Función: `crypto.createHmac('sha256', secret).update(payload).digest('hex')` y comparar con header.



---

## Ejercicio 184 — Sockets (socket.io) para actualizar UI en tiempo real

- **Descripción:** Integrar socket.io en server y emitir cambios cuando se crean/actualizan tasks.

- **Objetivo:** Función: `io.emit('task:created', task)` y en client `socket.on('task:created',...)`.



---

## Ejercicio 185 — Implementar búsqueda avanzada con agregations y facets

- **Descripción:** Usar pipeline de aggregate con `$facet` para devolver data+meta en una sola query.

- **Objetivo:** Función: `Model.aggregate([{ $match:{...}}, { $facet: { data:[...], meta:[...]}}])`



---

## Ejercicio 186 — Optimizar uso de populate con projection

- **Descripción:** Cuando uses populate, limita campos: `.populate('user','name email')`

- **Objetivo:** Función: `Model.find().populate('user','name email')`



---

## Ejercicio 187 — TTL indexes para datos temporales

- **Descripción:** Crear índice TTL para documentos que expiran (ej. sesiones).

- **Objetivo:** Función: `schema.index({ createdAt:1 }, { expireAfterSeconds: 3600 })` (requiere campo date).



---

## Ejercicio 188 — Sanitizar salida para evitar XSS en templates (si aplica)

- **Descripción:** Escapar datos en el frontend o usar librerías de templating seguras.

- **Objetivo:** Guía: en JS del cliente, usar `textContent` en lugar de `innerHTML`.



---

## Ejercicio 189 — Despliegue simulado: variables y scripts para producción

- **Descripción:** Preparar `start` script (`NODE_ENV=production node server.js`) y usar env vars.

- **Objetivo:** Guía: `process.env.PORT || 3000`, `MONGO_URI` en env; `npm run start` para prod.



---

## Ejercicio 190 — Blue/Green deploy - concepto y pasos

- **Descripción:** Documentar pasos para despliegue seguro de nuevas versiones (sin downtime).

- **Objetivo:** Guía: tener dos entornos, realizar switch de traffic, rollback si falla.



---

## Ejercicio 191 — Documentar API con OpenAPI (Swagger) (básico)

- **Descripción:** Agregar documentación mínima con swagger-jsdoc + swagger-ui-express.

- **Objetivo:** Función: `swaggerJsdoc({...})` y `app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))`



---

## Ejercicio 192 — Health checks extendidos (DB + cache)

- **Descripción:** Endpoint `/health` que verifique conexión a Mongo y estado de Redis/otros.

- **Objetivo:** Guía: `mongoose.connection.readyState` y ping a cache.



---

## Ejercicio 193 — Política de CORS dinámica por tenant

- **Descripción:** Ajustar `cors` para leer lista de orígenes permitidos desde DB o config.

- **Objetivo:** Función: `app.use(cors({ origin: function(origin, cb){ cb(null, allowed.includes(origin)); } }))`



---

## Ejercicio 194 — Logs estructurados (JSON) con winston/pino

- **Descripción:** Configurar logger JSON con niveles y archivo/console transports.

- **Objetivo:** Función/paquete: `winston.createLogger({ transports:[ new winston.transports.File(...)]})`.



---

## Ejercicio 195 — Implementar métricas Prometheus (esquema)

- **Descripción:** Exponer `/metrics` con counters/histogram para latencia y errores.

- **Objetivo:** Paquete: `prom-client` y `register.metrics()`.



---

## Ejercicio 196 — Backup automático con cron (script)

- **Descripción:** Crear script que exporte DB y subir a storage o guardar localmente con cron schedule.

- **Objetivo:** Herramienta: `node-cron` o cronjob en servidor; usar `mongodump` para backups.



---

## Ejercicio 197 — Reindex/rebuild plan (procedimiento)

- **Descripción:** Documentar cómo recrear índices en caso de corrupción o migración.

- **Objetivo:** Comando: `db.collection.reIndex()` en mongo shell o `Model.collection.createIndex()`.



---

## Ejercicio 198 — Migraciones de datos (esquema)

- **Descripción:** Crear script que transforme documentos antiguos al nuevo esquema.

- **Objetivo:** Guía: iterar `for await (const doc of Model.find()) { /* modificar y save */ }`.



---

## Ejercicio 199 — Práctica de seguridad: escaneo con npm audit y correcciones

- **Descripción:** Ejecutar `npm audit` y aplicar `npm audit fix` o actualizar dependencias críticas.

- **Objetivo:** Comando: `npm audit` y `npm audit fix --force` (con precaución).



---

## Ejercicio 200 — Proyecto final: despliegue local + README completo

- **Descripción:** Empaquetar la aplicación (client + server), documentar cómo instalar, correr tests, variables env y endpoints.

- **Objetivo:** Guía: incluir `README.md` con pasos: `npm install`, `cp .env.example .env`, `npm run start`, y ejemplos curl. Asegurarse que la app arranca y endpoints CRUD funcionan.



---
