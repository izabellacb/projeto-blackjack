/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`Boas Vindas ao jogo de BlackJack!`)
const iniciarRodada = confirm(`Quer iniciar uma nova rodada?`)

const cartaUsuario = comprarCarta() 
const cartaComputador = comprarCarta() 
const pontuacaoUser = cartaUsuario.valor + cartaUsuario.valor
const pontuacaoComputer = cartaComputador.valor + cartaComputador.valor

/*
if(iniciarRodada === false)
   console.log(`O jogo acabou`)
else{

   if(pontuacaoUser > pontuacaoComputer){
      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser}\n`,
      `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer}\nO usuário ganhou!`)
            
      
   }else if(pontuacaoUser < pontuacaoComputer){
      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser}\n`,
      `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer}\nO computador ganhou!`)
   
   }else if(pontuacaoUser === pontuacaoComputer){
      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser}\n`,
      `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer}\nEmpate!!!`)
      
      
   } 

}
*/

if(iniciarRodada === false)
   console.log(`O jogo acabou`)
else {

   if(pontuacaoUser > 21){
    console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser} Pontuação maior que 21. Jogador perdeu!\n`,
    `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer} Vencedor!!!`)
   } else {

   if(pontuacaoComputer > 21){
      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser} Vencedor!!!\n`,
      `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer} Pontuação maior que 21. Jogador perdeu!`)
   } else {

   if(pontuacaoUser > pontuacaoComputer) {
      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser}\n`,
      `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer}\nO usuário ganhou!`)

   }else if(pontuacaoUser < pontuacaoComputer){
      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser}\n`,
      `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer}\nO computador ganhou!`)

   }else if(pontuacaoUser === pontuacaoComputer){
      console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario.texto} - pontuação ${pontuacaoUser}\n`,
      `Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${pontuacaoComputer}\nEmpate!!!`)
   }
   }  
   }

}






