import { Schema, model } from 'mongoose';

//squema
const peliculaSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique:true

    },
    nombre:{
        type:String,
        required:true,
        minlength:2

    },
    año:{
        type:String,

    },
    duracion:{
        type:String,

    }
});
////señor Mongodb, reconozca este esquema en su base de datos
//module.exports = model ('peliculas', peliculaSchema);
const Pelicula = model('pelicula', peliculaSchema);
export default Pelicula;

