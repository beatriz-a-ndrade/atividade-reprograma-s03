// [Desafio 05]:Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function verificarIdade(anoNascimento) {
    if ( anoNascimento < 2002) {
        return "Essa pessoa já atingiu a maioridade"
    }
    else if (anoNascimento >= 2004) {
        return "Essa pessoa ainda não atingiu a maioridade"
    }
}

console.log(verificarIdade(1994))        //Exemplo de retorno para a condição de maioridade
console.log(verificarIdade(2008))        // Exemplo de retorno para a condição de menor idade