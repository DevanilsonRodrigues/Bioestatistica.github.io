var array = [12,12,15,15,16,18,20,22,25,27,27,29,32,32,34,38,40,42,42,45,48,50,50];

function calcularMediana(array) {
  // Ordena o array em ordem crescente
  array.sort(function(a, b) {
    return a - b;
  });

  const tamanho = array.length;
  const meio = Math.floor(tamanho / 2);
  console.log(meio , "meio  ")

  if (tamanho % 2 === 1) {
    // Tamanho ímpar, mediana é o valor central
    return array[meio];
  } else {
    // Tamanho par, mediana é a média dos dois valores centrais
    console.log(array[meio - 1] , array[meio]);

    return (array[meio - 1] + array[meio]) / 2;
  
  }
}






