let jogador = "x";


function jogar(celula){
    //if verifique se inner ou seja pagina celula esta vazia

    let numeroDeRepeticoes = 0;

do {
    if(celula.innerHTML == "") {
    
        celula.innerHTML = jogador ;

        if(jogador == "x") {
            jogador = "o";

        }else {
            jogador = "x";
        }
    }
    numeroDeRepeticoes++;
} while (numeroDeRepeticoes < 8);

console.log('Ingressos Esgotados');
}
 
function reiniciar () {
 //  alert ("Vamores Reiniciar A partida")
    window.location.reload();
}
//(if) SE carro vem vind:
    //stop ;
//(else) SE NÃO 
  //atraseve;
