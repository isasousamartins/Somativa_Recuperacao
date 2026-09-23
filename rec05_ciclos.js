const entrada = require("readline-sync");

const pecasPorCiclo = entrada.questionInt("Digite quantas produtos sao produzidos por ciclo: ");


for (let ciclo = 1; ciclo <= 12; ciclo++) {
    const producaoAcumulado = pecasPorCiclo * ciclo;
    console.log(`Ciclo ${ciclo} = ${producaoAcumulado} `);
}