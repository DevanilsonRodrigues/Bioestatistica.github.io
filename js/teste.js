var array = [12, 12,12, 15, 15, 16, 18, 20, 22, 25, 27, 27, 29, 32, 32, 34, 38, 40, 42, 42, 45, 48, 50, 50];
function calcularModa(arr) {
  // Cria um objeto para armazenar a contagem de ocorrências de cada valor
  var ocorrencias = {};
  // Percorre o array e conta as ocorrências de cada valor
  for (var i = 0; i < arr.length; i++) {
    if (ocorrencias[arr[i]] === undefined) {
      ocorrencias[arr[i]] = 1;
    } else {
      ocorrencias[arr[i]]++;
    }
  }

  // Encontra o valor com o maior número de ocorrências
  var moda;
  var maxOcorrencias = 0;
  for (var valor in ocorrencias) {
    if (ocorrencias[valor] > maxOcorrencias) {
      moda = valor;
      maxOcorrencias = ocorrencias[valor];
    }
  }

  console.log(ocorrencias)
  return moda;

}

// Exemplo de uso
var numeros = array;
var moda = calcularModa(numeros);
console.log("A moda é: " + moda);











