// [Desafio 06]: Crie um algoritmo que converte dias em horas, quando recebe um número de dias.

// Como converter dias em horas (recebendo o número de dias): hora = número de dias multiplicado por 24

function diasEmHoras(numDias) {
    const horas = numDias * 24
    return ` O número de horas referente à ${numDias} dias é: ${horas}`
}

console.log(diasEmHoras(87))             // Exemplos de retornos com diferentes entradas
console.log(diasEmHoras(20))
console.log(diasEmHoras(137))