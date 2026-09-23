const entrada = require('readline-sync');

const nivelOleo = entrada.questionFloat (`Nivel do oleo(%): `);


console.log(`Nivel informado: ${nivelOleo} %`);

if (nivelOleo >= 40 && nivelOleo <= 80) {
    console.log("NIVEL NORMAL");
} else {
    console.log("INSPECAO NESSESSARIA");
}