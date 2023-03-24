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
//inicio do jogo

function desafioBlack(){

   let iniciarRodada = confirm(`Boas Vindas ao jogo de Blackjack! \nQuer iniciar uma nova rodada?`)

   //* As cartas dos jogadores (usuário e computador) podem ser armazenadas em array.

   let usuario = []
   let computador = []

   if(iniciarRodada){
      let sorteiaCartas = true

      while(sorteiaCartas){
         usuario.push(comprarCarta())
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
         computador.push(comprarCarta())

         if((usuario[0].valor === 11 && usuario[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)){
         
         usuario = []
         computador = []

         }  else {
         sorteiaCartas = false
         }

      }

      let fraseUsuario = `Usuário: `
      let fraseComputador = `Computador: `
      
      let pontuacaoUser = 0
      let pontuacaoComputer = 0

      for(let i=0; i < usuario.length; i++){
         fraseUsuario += usuario[i].texto + ' '
         pontuacaoUser += usuario[i].valor
      }

      for(let i=0; i < computador.length; i++){
        fraseComputador += computador[i].texto + ' '
         pontuacaoComputer += computador[i].valor

      }

      let comprarNovaCarta = true

      while(comprarNovaCarta){
         if(pontuacaoUser > 21) {
            break
         }
         
         let verCartas = confirm(`${fraseUsuario}\nA carta reveleada do computador é: ${computador[0].texto}\n Deseja comprar mais uma carta?`)
      
         if(verCartas){
            let novaCarta = comprarCarta()
            usuario.push(novaCarta)
            pontuacaoUser += novaCarta.valor
            fraseUsuario += `${novaCarta.texto}`
         } else {
            comprarNovaCarta = false
         }
      }

      while(pontuacaoComputer < pontuacaoUser && pontuacaoUser < 21) {
         let novaCarta = comprarCarta()
         computador.push(novaCarta)
         pontuacaoComputer += novaCarta.valor
         fraseComputador += `${novaCarta.texto}`
      }

      let resultadoPartida = ''
      if(pontuacaoUser > 21) {
         resultadoPartida = `O comptador ganhou!`
      } else if(pontuacaoComputer > 21){
         resultadoPartida = `O usuário ganhou!`
      } else if(pontuacaoComputer > pontuacaoUser) {
         resultadoPartida = `O computador ganhou!`
      } else if(pontuacaoUser > pontuacaoComputer){
         resultadoPartida = `O usuário ganhou!`
      } else {
         resultadoPartida = "Empate!!!"
      }

         alert(`${fraseUsuario}\nPontuação do jogador: ${pontuacaoUser}\n${fraseComputador}\nPontuação do computador: ${pontuacaoComputer}\n${resultadoPartida}`)

      } else{
         alert(`O jogo acabou!`)
      }
   
}
desafioBlack()
      
   