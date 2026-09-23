const entrada = require("readline-sync");

const componentes = [];

for (let i = 0; i < 3; i++) {
    console.log(`\nCadastro do componente ${i + 1}`);

    const nome = entrada.question("Nome: ");
    const quantidade = entrada.questionInt("Quantidade em estoque: ");
    const estoqueMinimo = entrada.questionInt("Estoque mínimo: ");

    const componente = {
        nome,
        quantidade,
        estoqueMinimo
    };

    componentes.push(componente);
}

console.log("\n=== RELATÓRIO DE ESTOQUE ===");

for (let i = 0; i < componentes.length; i++) {
    const item = componentes[i];

    console.log(`Ferramenta: ${item.nome}`);
    console.log(`Quantidade: ${item.quantidade}`);
    console.log(`Estoque minimo: ${item.estoqueMinimo}`);

    if (item.quantidade < item.estoqueMinimo) {
        console.log("REPOR");
    } else {
        console.log("ESTOQUE SUFICIENTE");
    }
}