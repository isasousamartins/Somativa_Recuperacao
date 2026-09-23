const entrada = require("readline-sync");

let soma = 0;

for (let i = 1; i <= 6; i++) {
    const medicao = entrada.questionFloat(`Digite a medicao ${i}: `);
    soma += medicao;
}

const media = soma / 6;

console.log("\n=== RESULTADO DAS MEDICOES ===");
console.log(`Soma das medicoes: ${soma}`);
console.log(`Media final: ${media}`);