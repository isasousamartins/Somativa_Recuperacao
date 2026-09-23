const entrada = require(`readline-sync`);

const nivelVibracao = entrada.questionInt ("Digite o valor da vibracao: ");


if (nivelVibracao <= 3){
    console.log(` ${nivelVibracao} mm/s ESTAVEL`);
}else if (nivelVibracao >= 3 && nivelVibracao <= 6){
    console.log(` ${nivelVibracao} mm/s ATENCAO`);
}else {
    console.log(` ${nivelVibracao} mm/s CRITICA`);
}