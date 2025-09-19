import express from 'express';
import mongoose from 'mongoose';
import pelicula from './peliculas.js';

const app = express();
const PORT = 4000;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mi_basededatos')
    .then(() => console.log('conectado a MongoDB'))
    .catch(err => console.error('Error de conexion mongo', err));

app.delete('/eliminar/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const eliminar = await pelicula.findOneAndDelete(
            {id:parseInt(id)}

        )
        if(!eliminar){
            return res.status(404).json({message:"ID incorrecto"})
        }
        res.status(200).json({message:"pelicula eliminada",eliminar});

    }catch(err){
        res.status(500).json({message:err.message})
    }
})
app.put('/actualizar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, año, duracion } = req.body;
//Model.findOneAndUpdate(filtro, actualización, opciones)
        const actualizarPelicula = await pelicula.findOneAndUpdate( 
            {id: parseInt(id)},
            { nombre, año, duracion },
            { new: true }

        );
        if (!actualizarPelicula) {
            return res.status(404).json({ message: "ID incorrecto" })

        }
        res.json({ message: "pelicula actualizada", pelicula: actualizarPelicula });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})
app.post('/subir', async (req, res) => {
    try {
        //un solo objeto
       // const nuevaPelicula = new pelicula(req.body);
        //await nuevaPelicula.save();
        //array de objetos
        const peliculas = await pelicula.insertMany(req.body); 
        res.status(201).send(nuevaPelicula);

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
app.get('/inicio', async (req, res) => {
    try {
        const lista = await pelicula.find();
        res.json(lista);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las peliculas' })
        
    }

})
app.listen(PORT, (req, res) => {
    console.log(`servidor escuchado http://localhost:${PORT}`);

});