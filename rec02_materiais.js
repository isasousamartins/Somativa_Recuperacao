const entrada = require('readline-sync');

const nomePeca = entrada.question("Nome da peca: ");
const quantidadeComprada = entrada.questionInt("Quantidade de pecas comprada: ");
const precoUnitario = entrada.questionFloat("Preco unitario: ");

const totalCompra = quantidadeComprada * precoUnitario;

console.log("\n=== RESUMO DA COMPRA ===");
console.log(`Peca: ${nomePeca}`);
console.log(`Quantidade: ${quantidadeComprada}`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${totalCompra.toFixed(2)}`);