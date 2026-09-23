
const entrada = require("readline-sync");

function calcularEficiencia(quantidadeTotal, quantidadeUtil) {
    return (quantidadeUtil / quantidadeTotal) * 100;
}

function classificarEficiencia(percentual) {
    if (percentual >= 90) {
        return "EXELENTE";
    } else if (percentual <= 75, percentual >= 89.99) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const producaototal = entrada.questionFloat("Producao util: ");
const producaoutil = entrada.questionFloat("Producao total: ");

const eficiencia = calcularEficiencia(producaoutil, producaototal);
const classificacao = classificarEficiencia(eficiencia);

console.log("\n=== RELATÓRIO DE APROVEITAMENTO ===");
console.log(`Produção util: ${producaototal}`);
console.log(`Produção total: ${producaoutil}`);
console.log(`Eficiência: ${eficiencia.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);