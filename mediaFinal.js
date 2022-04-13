// [Desafio 03] :  Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens
// de acordo com cada situação:

 // [Se a media for igual ou maior que 7 - 'Aprovado']
 // [Se a media for maior e igual a cinco e menor que 7 - 'Recuperação']
 // [Se a media for menor que 5 - 'Reprovado']

 function ResultmediaFinal(num1, num2, num3) {
     const media = ((num1 + num2 + num3) / 3)

     if (media >= 7 && media <= 10) {
         return "Aprovado"
     } else if (media < 7 && media >= 5) {
         return "Recuperação"
     } else if (media < 4 && media >= 0) {
         return "Reprovado"
     } else {
         return "Resultado não encontrado"
       }
     }

     console.log(ResultmediaFinal(7,9,4))     //Exemplo de saídas com o resultado das 3 notas
     console.log(ResultmediaFinal(7,8,5)) 
     
