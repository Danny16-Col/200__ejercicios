# Parte 3: Integración con MongoDB (Ejercicios 101–150)

En esta sección trabajarás con **MongoDB y Mongoose** para integrar una base de datos real en tus proyectos con Express.

---

## Ejercicios 101–110: Conexión y operaciones básicas


**Ejercicio 101**  
- Descripción: Instalar Mongoose en el proyecto.  
- Objetivo: Preparar el entorno para trabajar con MongoDB.  
- Comando: `npm install mongoose`
```js
// No es código JS, pero el comando es:
// npm install mongoose
```


**Ejercicio 102**  
- Descripción: Conectar Node.js a MongoDB con Mongoose.  
- Objetivo: Establecer la primera conexión.  
- Función: `mongoose.connect()`
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión', err));
```


**Ejercicio 103**  
- Descripción: Crear un esquema básico de usuario.  
- Objetivo: Definir estructura de datos.  
- Función: `new mongoose.Schema({ ... })`
```js
const userSchema = new mongoose.Schema({
	nombre: String,
	email: String,
	edad: Number
});
```


**Ejercicio 104**  
- Descripción: Generar un modelo de Mongoose.  
- Objetivo: Asociar un esquema a una colección.  
- Función: `mongoose.model("User", userSchema)`
```js
const User = mongoose.model('User', userSchema);
```


**Ejercicio 105**  
- Descripción: Insertar un documento en la colección.  
- Objetivo: Guardar datos en MongoDB.  
- Función: `Model.create()`
```js
User.create({ nombre: 'Ana', email: 'ana@email.com', edad: 25 })
	.then(doc => console.log('Usuario creado:', doc))
	.catch(err => console.error(err));
```


**Ejercicio 106**  
- Descripción: Leer todos los documentos de una colección.  
- Objetivo: Recuperar información básica.  
- Función: `Model.find()`
```js
User.find()
	.then(usuarios => console.log(usuarios))
	.catch(err => console.error(err));
```


**Ejercicio 107**  
- Descripción: Buscar un documento por ID.  
- Objetivo: Acceder a un registro específico.  
- Función: `Model.findById()`
```js
User.findById('id_del_usuario')
	.then(usuario => console.log(usuario))
	.catch(err => console.error(err));
```


**Ejercicio 108**  
- Descripción: Actualizar un documento por ID.  
- Objetivo: Modificar registros existentes.  
- Función: `Model.findByIdAndUpdate()`
```js
User.findByIdAndUpdate('id_del_usuario', { edad: 30 }, { new: true })
	.then(usuario => console.log('Actualizado:', usuario))
	.catch(err => console.error(err));
```


**Ejercicio 109**  
- Descripción: Eliminar un documento por ID.  
- Objetivo: Borrar registros de la base de datos.  
- Función: `Model.findByIdAndDelete()`
```js
User.findByIdAndDelete('id_del_usuario')
	.then(() => console.log('Usuario eliminado'))
	.catch(err => console.error(err));
```


**Ejercicio 110**  
- Descripción: Contar documentos en una colección.  
- Objetivo: Obtener métricas rápidas.  
- Función: `Model.countDocuments()`
```js
User.countDocuments()
	.then(cantidad => console.log('Total usuarios:', cantidad))
	.catch(err => console.error(err));
```

---

## Ejercicios 111–125: CRUD completo con Mongoose


**Ejercicio 111**  
- Descripción: Crear un endpoint para registrar usuarios.  
- Objetivo: Implementar la operación Create.  
- Función: `Model.save()`
```js
// Express + Mongoose
app.post('/usuarios', async (req, res) => {
	try {
		const usuario = new User(req.body);
		await usuario.save();
		res.status(201).json(usuario);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});
```


**Ejercicio 112**  
- Descripción: Crear un endpoint para obtener todos los usuarios.  
- Objetivo: Implementar la operación Read.  
- Función: `Model.find()`
```js
app.get('/usuarios', async (req, res) => {
	const usuarios = await User.find();
	res.json(usuarios);
});
```


**Ejercicio 113**  
- Descripción: Endpoint para obtener un usuario por ID.  
- Objetivo: Acceder a un recurso específico.  
- Función: `Model.findById()`
```js
app.get('/usuarios/:id', async (req, res) => {
	const usuario = await User.findById(req.params.id);
	if (!usuario) return res.status(404).json({ error: 'No encontrado' });
	res.json(usuario);
});
```


**Ejercicio 114**  
- Descripción: Endpoint para actualizar un usuario por ID.  
- Objetivo: Implementar Update.  
- Función: `Model.findByIdAndUpdate()`
```js
app.put('/usuarios/:id', async (req, res) => {
	const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
	if (!usuario) return res.status(404).json({ error: 'No encontrado' });
	res.json(usuario);
});
```


**Ejercicio 115**  
- Descripción: Endpoint para eliminar un usuario por ID.  
- Objetivo: Implementar Delete.  
- Función: `Model.findByIdAndDelete()`
```js
app.delete('/usuarios/:id', async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.json({ mensaje: 'Usuario eliminado' });
});
```


**Ejercicio 116**  
- Descripción: Crear validaciones en el esquema de usuario.  
- Objetivo: Asegurar calidad de datos.  
- Función: `required: true`
```js
const userSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	email: { type: String, required: true },
	edad: Number
});
```


**Ejercicio 117**  
- Descripción: Usar select para traer solo ciertos campos.  
- Objetivo: Optimizar consultas.  
- Función: `Model.find().select("name email")`
```js
User.find().select('nombre email')
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 118**  
- Descripción: Usar limit en las consultas.  
- Objetivo: Controlar la cantidad de resultados.  
- Función: `Model.find().limit(10)`
```js
User.find().limit(10)
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 119**  
- Descripción: Usar skip para paginación básica.  
- Objetivo: Saltar registros.  
- Función: `Model.find().skip(10)`
```js
User.find().skip(10)
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 120**  
- Descripción: Crear endpoint con búsqueda por parámetros.  
- Objetivo: Implementar consultas dinámicas.  
- Función: `Model.find({ field: value })`
```js
app.get('/usuarios/buscar', async (req, res) => {
	const filtros = req.query; // ejemplo: /usuarios/buscar?nombre=Ana
	const usuarios = await User.find(filtros);
	res.json(usuarios);
});
```


**Ejercicio 121**  
- Descripción: Endpoint que busque usuarios por email.  
- Objetivo: Consultar con criterios únicos.  
- Función: `Model.findOne({ email })`
```js
app.get('/usuarios/email/:email', async (req, res) => {
	const usuario = await User.findOne({ email: req.params.email });
	if (!usuario) return res.status(404).json({ error: 'No encontrado' });
	res.json(usuario);
});
```


**Ejercicio 122**  
- Descripción: Endpoint que busque con expresiones regulares.  
- Objetivo: Hacer búsquedas parciales.  
- Función: `Model.find({ name: /pattern/ })`
```js
app.get('/usuarios/buscar-nombre/:texto', async (req, res) => {
	const usuarios = await User.find({ nombre: new RegExp(req.params.texto, 'i') });
	res.json(usuarios);
});
```


**Ejercicio 123**  
- Descripción: Endpoint que filtre por múltiples condiciones.  
- Objetivo: Hacer consultas compuestas.  
- Función: `Model.find({ age: { $gt: 18, $lt: 30 } })`
```js
app.get('/usuarios/jovenes', async (req, res) => {
	const usuarios = await User.find({ edad: { $gt: 18, $lt: 30 } });
	res.json(usuarios);
});
```


**Ejercicio 124**  
- Descripción: Crear un CRUD completo de productos.  
- Objetivo: Practicar con otro recurso.  
- Funciones: `Model.create()`, `Model.find()`, `Model.findByIdAndUpdate()`, `Model.findByIdAndDelete()`
```js
const productoSchema = new mongoose.Schema({ nombre: String, precio: Number });
const Producto = mongoose.model('Producto', productoSchema);

// Crear
app.post('/productos', async (req, res) => {
	const producto = await Producto.create(req.body);
	res.status(201).json(producto);
});
// Leer
app.get('/productos', async (req, res) => {
	const productos = await Producto.find();
	res.json(productos);
});
// Actualizar
app.put('/productos/:id', async (req, res) => {
	const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.json(producto);
});
// Eliminar
app.delete('/productos/:id', async (req, res) => {
	await Producto.findByIdAndDelete(req.params.id);
	res.json({ mensaje: 'Producto eliminado' });
});
```


**Ejercicio 125**  
- Descripción: Implementar endpoints de usuarios y productos en paralelo.  
- Objetivo: Manejar múltiples colecciones.  
- Función: Modelos diferentes.
```js
// Ya tienes endpoints para usuarios y productos funcionando en paralelo en el mismo servidor Express.
// Solo asegúrate de tener ambos modelos y rutas definidos.
```

---

## Ejercicios 126–135: Consultas avanzadas


**Ejercicio 126**  
- Descripción: Ordenar resultados por nombre ascendente.  
- Objetivo: Aplicar `sort()`.  
- Función: `Model.find().sort({ name: 1 })`
```js
User.find().sort({ nombre: 1 })
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 127**  
- Descripción: Ordenar resultados por fecha descendente.  
- Objetivo: Usar orden inverso.  
- Función: `Model.find().sort({ createdAt: -1 })`
```js
User.find().sort({ createdAt: -1 })
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 128**  
- Descripción: Filtrar documentos con operadores lógicos.  
- Objetivo: Usar `$or`, `$and`.  
- Función: `Model.find({ $or: [ { age: 18 }, { city: "Bogotá" } ] })`
```js
User.find({ $or: [ { edad: 18 }, { ciudad: "Bogotá" } ] })
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 129**  
- Descripción: Usar `$in` para buscar múltiples valores.  
- Objetivo: Consultar varios criterios.  
- Función: `Model.find({ city: { $in: ["Bogotá", "Medellín"] } })`
```js
User.find({ ciudad: { $in: ["Bogotá", "Medellín"] } })
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 130**  
- Descripción: Usar `$exists` para filtrar campos que existan.  
- Objetivo: Consultar documentos incompletos.  
- Función: `Model.find({ phone: { $exists: true } })`
```js
User.find({ telefono: { $exists: true } })
	.then(usuarios => console.log(usuarios));
```


**Ejercicio 131**  
- Descripción: Usar `$gte` y `$lte` en consultas numéricas.  
- Objetivo: Filtrar por rangos.  
- Función: `Model.find({ price: { $gte: 100, $lte: 500 } })`
```js
Producto.find({ precio: { $gte: 100, $lte: 500 } })
	.then(productos => console.log(productos));
```


**Ejercicio 132**  
- Descripción: Usar índices de texto.  
- Objetivo: Implementar búsqueda avanzada.  
- Comando: `db.collection.createIndex({ field: "text" })`
```js
// En la shell de MongoDB:
// db.usuarios.createIndex({ nombre: "text" })
```


**Ejercicio 133**  
- Descripción: Usar agregaciones para sumar valores.  
- Objetivo: Procesar datos.  
- Función: `Model.aggregate([{ $group: { _id: null, total: { $sum: "$price" } } }])`
```js
Producto.aggregate([
	{ $group: { _id: null, total: { $sum: "$precio" } } }
])
.then(resultado => console.log(resultado));
```


**Ejercicio 134**  
- Descripción: Usar agregaciones con `$match` y `$group`.  
- Objetivo: Consultas avanzadas.  
- Función: `Model.aggregate([{ $match: { active: true } }, { $group: { _id: "$city", count: { $sum: 1 } } }])`
```js
User.aggregate([
	{ $match: { activo: true } },
	{ $group: { _id: "$ciudad", count: { $sum: 1 } } }
])
.then(resultado => console.log(resultado));
```


**Ejercicio 135**  
- Descripción: Implementar paginación avanzada con skip y limit.  
- Objetivo: Combinar filtros, sort y paginación.  
- Funciones: `skip()`, `limit()`, `sort()`
```js
User.find({})
	.sort({ nombre: 1 })
	.skip(20)
	.limit(10)
	.then(usuarios => console.log(usuarios));
```

---

## Ejercicios 136–145: Relaciones entre colecciones


**Ejercicio 136**  
- Descripción: Crear un esquema de órdenes que referencie a usuarios.  
- Objetivo: Manejar relaciones.  
- Función: `ref: "User"`
```js
const ordenSchema = new mongoose.Schema({
	usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	fecha: Date
});
```


**Ejercicio 137**  
- Descripción: Crear esquema de productos en las órdenes.  
- Objetivo: Manejar arrays de referencias.  
- Función: `[{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]`
```js
const ordenSchema = new mongoose.Schema({
	usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],
	fecha: Date
});
```


**Ejercicio 138**  
- Descripción: Insertar una orden asociada a un usuario.  
- Objetivo: Probar relaciones simples.  
- Función: `Model.create({ user: userId })`
```js
Orden.create({ usuario: userId, productos: [productoId1, productoId2], fecha: new Date() })
	.then(orden => console.log(orden));
```


**Ejercicio 139**  
- Descripción: Usar populate para traer datos del usuario en la orden.  
- Objetivo: Consultar referencias.  
- Función: `Order.find().populate("user")`
```js
Orden.find().populate('usuario')
	.then(ordenes => console.log(ordenes));
```


**Ejercicio 140**  
- Descripción: Usar populate para traer productos de una orden.  
- Objetivo: Consultar arrays de referencias.  
- Función: `Order.find().populate("products")`
```js
Orden.find().populate('productos')
	.then(ordenes => console.log(ordenes));
```


**Ejercicio 141**  
- Descripción: Hacer populate anidado (usuario + productos).  
- Objetivo: Consultas complejas.  
- Función: `.populate("user").populate("products")`
```js
Orden.find().populate('usuario').populate('productos')
	.then(ordenes => console.log(ordenes));
```


**Ejercicio 142**  
- Descripción: Crear un endpoint que devuelva orden + usuario + productos.  
- Objetivo: Integrar populate en un CRUD.  
- Función: `populate()`
```js
app.get('/ordenes/:id', async (req, res) => {
	const orden = await Orden.findById(req.params.id)
		.populate('usuario')
		.populate('productos');
	res.json(orden);
});
```


**Ejercicio 143**  
- Descripción: Implementar un esquema con subdocumentos (dirección).  
- Objetivo: Evitar referencias externas.  
- Función: `{ address: { street: String, city: String } }`
```js
const userSchema = new mongoose.Schema({
	nombre: String,
	direccion: {
		calle: String,
		ciudad: String
	}
});
```


**Ejercicio 144**  
- Descripción: Usar validaciones en subdocumentos.  
- Objetivo: Asegurar consistencia.  
- Función: `required: true`
```js
const userSchema = new mongoose.Schema({
	nombre: String,
	direccion: {
		calle: { type: String, required: true },
		ciudad: { type: String, required: true }
	}
});
```


**Ejercicio 145**  
- Descripción: Combinar populate y filtros.  
- Objetivo: Consultas complejas.  
- Función: `Order.find().populate({ path: "user", match: { active: true } })`
```js
Orden.find().populate({ path: 'usuario', match: { activo: true } })
	.then(ordenes => console.log(ordenes));
```

---

## Ejercicios 146–150: Optimización y seguridad


**Ejercicio 146**  
- Descripción: Configurar variables de entorno para la conexión.  
- Objetivo: Proteger credenciales.  
- Librería: `dotenv`
```js
// Instala dotenv: npm install dotenv
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);
```


**Ejercicio 147**  
- Descripción: Usar índices para mejorar búsquedas.  
- Objetivo: Optimizar rendimiento.  
- Función: `Schema.index({ field: 1 })`
```js
userSchema.index({ email: 1 });
```


**Ejercicio 148**  
- Descripción: Prevenir inyecciones de consultas.  
- Objetivo: Asegurar queries.  
- Función: Validaciones con Mongoose.
```js
// Usa validaciones en el esquema y sanitiza los datos recibidos en req.body
const userSchema = new mongoose.Schema({
	email: { type: String, required: true, match: /.+@.+\..+/ }
});
```


**Ejercicio 149**  
- Descripción: Implementar middleware de Mongoose para auditar cambios.  
- Objetivo: Registrar operaciones.  
- Función: `schema.pre("save", function(next) { ... })`
```js
userSchema.pre('save', function(next) {
	console.log('Usuario modificado:', this);
	next();
});
```


**Ejercicio 150**  
- Descripción: Configurar un límite de peticiones al servidor.  
- Objetivo: Evitar ataques de fuerza bruta.  
- Librería: `express-rate-limit`
```js
// Instala express-rate-limit: npm install express-rate-limit
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutos
	max: 100 // límite de 100 peticiones por IP
});
app.use(limiter);
```

---
