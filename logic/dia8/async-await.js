async function saludar() {
    return "Hola async";
}

saludar().then(console.log);

function pedirCafe() {
    return new Promise((resolve, reject) => {
        console.log("☕ Preparando café...");

        setTimeout(() => {
            let hayCafe = Math.random() > 0.5; // 50% de éxito o error

            if (hayCafe) {
                resolve("✅ Aquí tienes tu café");
            } else {
                reject("❌ No queda café disponible");
            }
        }, 2000);
    });
}

pedirCafe()
    .then(res => console.log("Éxito:", res))
    .catch(err => console.log("Error:", err))
    .finally(() => console.log("👉 Pedido finalizado"));
