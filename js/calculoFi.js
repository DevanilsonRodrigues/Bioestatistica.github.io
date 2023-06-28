var arrayfi = array;




var minhaDiv = document.getElementById("divFi");
var botaofi = document.getElementById("botaofi")
let contador = 0;





function numerosClasses() {

  var K = (1 + (3.322 * Math.log10(arrayfi.length)));
  var amplitudiGeral = Math.max(...arrayfi) - Math.min(...arrayfi);
  var amplituIntervalo = amplitudiGeral / K.toFixed(0);
  var valorNn = document.getElementById("valorN");
  var valorK = document.getElementsByClassName("resutado");

   valorNn.textContent = array.length;
   valorK[0].textContent = K.toFixed(2);
   valorK[1].textContent = K.toFixed(0);
  console.log(arrayfi.length,"tamanho tabela")
  console.log(K,"formulaK");
  console.log(K.toFixed(0),"formulaK redondo");

  console.log(amplitudiGeral,"geral");
  console.log((amplituIntervalo),"amplituIntervalo")
  console.log(Math.ceil(amplituIntervalo),"amplituIntervalo");



  return [Math.ceil(amplituIntervalo), +K.toFixed(0)]; // tem alguma coisa de errado aqui


}



function cliqueBotao() {
  contador++;





  if (contador == 1) {
    numerosClasses();
    getFi();


  }



}


function caminho() {
  botaofi.addEventListener("click", cliqueBotao());

}






function getFi() {

  var menorNumero = Math.min(...arrayfi);

  
  // console.log(Math.max(...arrayfi), "valor maximo");

  for (var i = 0; i <= (numerosClasses()[1]); i++) {



    var numero2 = menorNumero;
    var segundoValor = menorNumero;

    menorNumero += numerosClasses()[0];
    // console.log((menorNumero), "valor somafinal");


   //if (i <= (numerosClasses[1])) {
    //  break
//}

   

    var quantidade = contarValoresNoIntervalo(arrayfi, numero2, (menorNumero) - 1);

    //console.log(arrayfi , numero2 , menorNumero, "elementos");


    //conteudo1.innerHTML = segundoValor;
    //conteudo2.innerHTML = menorNumero;
    //quantidadefi.innerHTML = quantidade;
    criaLinhaFi(segundoValor, menorNumero, quantidade)

    if( menorNumero > (Math.max(...arrayfi))){
      break
    }

    //console.log(quantidade,"quanditdae de fi")

  }

}

function contarValoresNoIntervalo(array, limiteInferior, limiteSuperior) {
  let contador = 0;
  array.sort();
  //console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= limiteInferior && array[i] <= limiteSuperior) {
      contador++;
    }

  }

  return contador;
}
