
try{
    throw new Error("¡Algo salió mal!");
}catch(e){
    console.log("Error capturado:", e.message);
}

function numero(n){
    if(n<0) throw new Error('numero negativo');
    return n;
}
console.log(numero(-5));
