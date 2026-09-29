const entrada = require("readline-sync");

const setores = [];

for (let i = 0; i < 6; i++) {
    const nome = entrada.question(`Digite os setores ${i + 1}: `);
    setores.push(nome);
}

console.log("\n=== SETORES ===");

for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}
