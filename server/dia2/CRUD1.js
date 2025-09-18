import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.json());

const peliculas = []; // nombre en minúscula por convención

app.delete('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    const eliminar = peliculas.findIndex(u => u.id === Number(id)); // minúscula y findIndex
    if (eliminar === -1) {
        return res.status(404).json({ message: "Id Incorrecto" }); // 404 si no existe
    }
    const peliculaEliminada = peliculas.splice(eliminar, 1)[0]; // guardar eliminada
    res.json({ message: "Pelicula eliminada", pelicula: peliculaEliminada }); // solo la eliminada
});

app.put('/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, año, duracion } = req.body;
    if (!nombre || !año || !duracion) {
        return res.status(400).json({ message: "Faltan datos obligatorios" }); // validación de campos
    }
    const actualizar = peliculas.find(u => u.id === Number(id)); // minúscula
    if (!actualizar) {
        return res.status(404).json({ message: "ID incorrecto" }); // 404 si no existe
    }
    Object.assign(actualizar, { nombre, año, duracion }); // actualización compacta
    res.json({ message: "Pelicula actualizada", pelicula: actualizar }); // solo la actualizada
});

app.post('/subir', (req, res) => {
    const { nombre, año, duracion } = req.body;
    if (!nombre || !año || !duracion) {
        return res.status(400).json({ message: "Faltan datos obligatorios" }); // validación de campos
    }
    const repetida = peliculas.find(u => u.nombre === nombre); // minúscula
    if (repetida) {
        return res.status(409).json({ message: "Pelicula repetida" }); // 409 conflicto
    }
    const newPelicula = { id: peliculas.length + 1, nombre, año, duracion }; // minúscula
    peliculas.push(newPelicula);
    res.status(201).json({ message: "Pelicula subida correctamente", pelicula: newPelicula }); // status 201 y solo la nueva
});

app.get('/inicio', (req, res) => {
    if (peliculas.length === 0) {
        return res.json({ message: "Bienvenidos a la tienda de peliculas por ahora nuestro estand esta vacio" }); // minúscula
    }
    res.json({ message: "Bienvenidos a la tienda de peliculas", peliculas }); // minúscula
});

app.listen(PORT, () => {
    console.log(`servidor escuchado http://localhost:${PORT}/inicio
    http://localhost:${PORT}/subir
    http://localhost:${PORT}/actualizar
    http://localhost:${PORT}/eliminar`);

})