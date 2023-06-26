function gerarNumero() {
    var numero = Math.floor(Math.random() * (80 - 10 + 1)) + 5;
    return numero;
  }
  
  // Exemplo de uso
  var numeroAleatorio = gerarNumero();
  console.log(numeroAleatorio);