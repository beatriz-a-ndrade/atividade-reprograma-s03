// [ Desafio 04]: Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

// Para o número ser par: número que o resto é zero quando dividido por 2 -> número % 2 == 0;
// E o que não for par, é impar;


function imparOuPar(num) {
    if (num % 2 == 0) {
        return "Par"
    }
    else {
        return "Ímpar"
    }
}

console.log(imparOuPar(5))           // Retorno para número Ímpar/default
console.log(imparOuPar(6))           // Retorno para número Par