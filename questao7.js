// [Desafio 07]: Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

// SE for Par : [num1 % num2] tem que ser 0
// SE for Ímpar: [num1 % num2] não pode ser 0


function divideNumeros(num1, num2) {
    const divisao = (num1 / num2).toFixed(2)    //Método toFixed() -> Formatar o número para sempre exibir duas casas decimais
    if (num1 % num2 == 0) {
        return `O resultado da divisão é ${divisao} e o número é par.`
    }
    else if (num1 % num2 != 0) {        // Operador de comparação [ != ] -> Diferente de ; 
        return `O resultado da divisão é ${divisao}` 
    }
}

console.log(divideNumeros(10,26))        //Exemplo de retorno de divisão que resultou em número [Ímpar]
console.log(divideNumeros(20,2))         ////Exemplo de retorno de divisão que resultou em número [Par]
console.log(divideNumeros(20,195)) 