import express from 'express';

const app = express();
const PORT = 3000;
/*========================================================
            funcion para mostrar el metodo y la url
========================================================*/
function mostrarMetodoYUr (req,res,next){
    console.log(`metodo: ${req.method},URL: ${req.url}`);
    next();
    
}
/*========================================================
                Base de datos simulada
========================================================*/
const Users=[
    {id:1,username:"Daniel"},
    {id:2,username:"Cortes"},
    {id:3,username:"Rios"},

]
/*========================================================
                        middlewere
========================================================*/
app.use(express.json());//leer formatos json y convertirlos en objetos
app.use(mostrarMetodoYUr);
/*========================================================
            Crea una ruta DELETE `/usuario/:id` que 
                    confirme la eliminación.                       
========================================================*/
app.delete('/delete/user/:id',(req,res)=>{
    const {id} = req.params;
//      el metodo findIndex() busca y devulve la posicion que cumpla la condicion
    const index = Users.findIndex(u => u.id === Number(id));
//      si no esta devuelve un -1 y se hace una condicion donde si sale -1
//      significa que no se existe
    if(index === -1){
        return res.status(404).json({message:"Usuario no encontrado"})

    }
//  el metodo splice() elimina el valor de esa posicion y se coloca 1 
//  para que solo elimine un objeto o posicion
    Users.splice(index,1);
    res.json({message:"usuario conrrectamente eliminado", Users})

})
/*========================================================
        Crea una ruta PUT `/usuario/:id` que reciba 
                un nuevo nombre y lo devuelva.                       
========================================================*/
app.put('/user/actualization/:id',(req,res)=>{
    const { id } = req.params;
    const { username } = req.body;
    const user = Users.find(u => u.id === Number(id));
    if (!user) {
        return res.status(404).json({ message: "ID incorrecto" });
    }
    user.username = username;
    res.json({ message: "Usuario actualizado", Users });

})
//Crear usuario
app.post('/user',(req,res)=>{
    const {username} = req.body
    const newUser = {id:Users.length+1,username}
    Users.push(newUser);
    res.json({message:"Usuario actualizado",Users:newUser,Users});

})
/*========================================================
        ruta que reciba JSON con nombre y lo devuelva.                       
========================================================*/
app.post('/enviar',(req,res)=>{
    res.json({message:`HOLA, ${req.body.nombre}`})

});
/*========================================================
        ruta con query en postman colocamos la ruta 
                    seguido ?q=palabra
========================================================*/
app.get('/palabra/',(req,res)=>{
    const q = req.query.q
    res.send(`palabra ${q}`)

})
/*========================================================
            recibir un parametro en la ruta                 
========================================================*/
app.get('/saludar/:nombre',(req,res)=>{
    const nombre2 = req.params.nombre;
    res.send(`Hola ${nombre2}`)

})
/*========================================================
    ruta get que recibe con un mensaje hola desde express                 
========================================================*/
app.get('/',(req,res)=>{
    res.send("Hola desde express");

});
/*========================================================
                 escuchar el servidor                 
========================================================*/
app.listen(PORT,()=>{
    console.log(`servidor ecuchado http://localhost:${PORT}
        http://localhost:${PORT}/saludar
        http://localhost:${PORT}/palabra
        http://localhost:${PORT}/enviar
        http://localhost:${PORT}/user
        http://localhost:${PORT}/user/actualization`);
    
});