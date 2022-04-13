// [Desafio 02]: Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function numeroComp(num1, num2) {
    if (num1 > num2) {
        return `${num1} é maior do que ${num2}`
    }
    else if (num1 < num2) {
        return `${num2} é maior do que ${num1} `
    }
    else if (num1 === num2) {
        return `Os números são iguais`
    }
}

console.log(numeroComp(2,3))
console.log(numeroComp(7,9))
console.log(numeroComp(27,34))