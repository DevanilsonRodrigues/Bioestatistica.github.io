var array = [];
var tabela = document.getElementById("tabelId")


function reset() {
    var primiroValor = document.getElementById("primeiroValor")
    var segundoValor = document.getElementById("segundoValor")

    //console.log("primoro", primiroValor.value , "segundo", segundoValor.value)
    array.splice(0);
    limpar();
    contador = 0;
    removerLinhas("taabelaCorpoFi", "tr");

    for (var i = 1; i < tabela.rows.length - 1; i++) {
        console.log(primiroValor.value)
         let numerosAleatorios = Math.floor(Math.random() * (segundoValor.value - primiroValor.value +1)) + Number(primiroValor.value) ;
        // let numerosAleatorios = Math.floor(Math.random() * (50 - 10 + 1)) + Number(10);
        array.push(+numerosAleatorios);
        prencher(numerosAleatorios, i, 1);

    }
}



function somar() {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += +array[i];
    }
    var somar = document.getElementById("soma");
    somar.innerHTML = (soma);
    return soma;

};

function media() {
    var media = document.getElementById("resutatoMedia");
    var somaDados = document.getElementById("somaDados");
    var quantidadeDados = document.getElementById("qantidadaElementos");
    var mediaValor = somar() / (tabela.rows.length - 2);
    media.innerHTML = mediaValor;
    somaDados.innerHTML = "<mn>"+ somar() +"</mn>";
    quantidadeDados.textContent = array.length;

    return mediaValor;



}


function mediana() {
    for (var i = 0; i < array.length; i++) {
        let getMediana = document.getElementById("valorMediana");
        getMediana.innerHTML = (array.sort());

    }

}

function desvio() {
    var tabela = document.getElementById("tabelId");
    var cellsoma = document.getElementById("somades");
    var soma = 0;

    for (var x = 1; x <= array.length; x++) {
        var calculoDesvio = 0
        var valorCell = tabela.rows[x].cells[1];
        var valorCell2 = tabela.rows[x].cells[2];
        var valor = valorCell.innerHTML;
        var desvio = +(((somar() / array.length) - valor) ** 2);
        soma += desvio;
        prencher(desvio, x, 2);
        calculoDesvio = valor - media();
        valorCell2.innerHTML = 
        "<math class='tabela'>\
         <mrow>\
          <mrow>\
            <mo>(</mo>\
            <mn>"+ valor+"</mn>\
            <mo>-</mo>\
            <mn>"+ media().toFixed(2)+"</mn>\
            <mo>)</mo>\
            <mn>²</mn>\
          </mrow>\
          <mo> =</mo>\
          <mn>"+((calculoDesvio)**2).toFixed(2)+"</mn>\
        </mrow>\
      </math>"


    }



    cellsoma.innerHTML = soma.toFixed(2);











}

function prencher(valor, x, y) {

    var tabela = document.getElementById("tabelId");
    var celula3 = tabela.rows[x].cells[y];
    celula3.innerHTML = valor



}

function valorQuadrado() {
    var tabela = document.getElementById("tabelId");
    var cellsoma = document.getElementById("somaquadrado");
    var soma = 0;


    for (var i = 1; i < array.length + 1; i++) {
        var valorCell = tabela.rows[i].cells[1];
        var valor = valorCell.innerHTML;
        var quadardo = valor ** 2;
        soma += quadardo;

        prencher(quadardo, i, 3);

    }
    cellsoma.innerHTML = soma;

    return soma;


}


function varancia() {

    // var campovariancia = document.getElementById("valorVariancia");

    var ps1 = (somar() ** 2);
    var ps2 = (ps1 / array.length);
    var ps3 = (valorQuadrado() - ps2);
    var ps4 = (ps3 / (array.length - 1));
    // campovariancia.innerHTML = ps4;
    console.log(ps4)
    return ps4.toFixed(4);



}


function varianciaPadrao() {

    var lblVariaciaPd = document.getElementById("variavelPadrao")
    var valorVariavel = document.getElementById("valorVariavel")
    var pd = Math.sqrt(varancia())
    

    lblVariaciaPd.innerHTML = pd.toFixed(4);
    valorVariavel.innerHTML = varancia();

    return pd;



}

function Coefi_variaçâo() {




    var cv = (varianciaPadrao() / media() * 100);
    var cvP = (Number(cv.toFixed(2)));
    var lblCv = document.getElementById("valorCv");
    var lblCvPor = document.getElementById("valorCvPor");
    lblCv.innerHTML = cv;
    lblCvPor.innerHTML = cvP;
    console.log(Number(cv.toFixed(2)), '%');


}




function limpar() {
    var tabela = document.getElementById("tabelId")
    var editatd = tabela.querySelectorAll("td");

    editatd.forEach(function (celula) {
        celula.textContent = "0";
    });


}


function dados() {

    array.splice(0);
    contador = 0;
    removerLinhas("taabelaCorpoFi", "tr");

    for (var i = 1; i < tabela.rows.length - 1; i++) {
        var celula = tabela.rows[i].cells[1];
        var conteudo = celula.innerHTML;
        array.push(conteudo);

    }





}

