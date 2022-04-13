// [Desafio 01] : Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

const dia = 0
function diaSemana(dia) {
    if (dia == 1) {
        return 'segunda-feira'
    }
    else if (dia == 2) {
        return 'terça-feira'
    }
    else if (dia == 3) {
        return 'quarta-feira'
    }
    else if (dia == 4) {
        return 'quinta-feira'
    }
    else if (dia == 5) {
        return 'sexta-feira'
    }
    else if (dia == 6) {
        return 'sábado'
    }
    else if (dia == 7) {
        return 'domingo'
    }
    else {
        return 'Dia da semana inexistente'
    }
  
}

console.log (diaSemana(1))        //Retorna 'segunda-feira'
console.log (diaSemana(2))        //Retorna 'terça-feira'
console.log (diaSemana(3))        //Retorna 'quarta-feira'
console.log (diaSemana(4))        //Retorna 'quinta-feira'
console.log (diaSemana(5))        //Retorna ' sexta-feira'
console.log (diaSemana(6))        //Retorna 'sábado'
console.log (diaSemana(7))        //Retorna 'domingo'
console.log (diaSemana(8))        //Retorna caso default 'Dia da semana inexistente'