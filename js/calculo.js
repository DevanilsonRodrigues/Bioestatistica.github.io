function passaDados() {

    var valorSomaDadosQuadrado = document.getElementById("somaquadrado");

    var get1 = document.getElementById("soma_dos_dados_quadrado");

    var get2 = document.getElementById("soma_dos_dados");

    var get3 = document.querySelectorAll(".valorN")[0];
    var get31 = document.querySelectorAll(".valorN")[1];
    var get4 = document.getElementById("resutado");
    console.log(get3);
    get1.textContent = valorSomaDadosQuadrado.textContent;
    get2.textContent = somar();
    get3.textContent = array.length;
    get31.textContent = array.length;
    get4.textContent = varancia();
    funçaoVariavel();

}
function funçaoVariavel() {
    var locualSomaDesvio = document.getElementById("marowFormula1");
    var somaDesvio = document.getElementById("somades");
    var valorN = document.getElementById("valorNF1")
    var valor = somaDesvio.textContent;

    locualSomaDesvio.innerHTML = "<mn> " + valor + "</mn>";
    valorN.textContent = array.length;
    var populaçao = document.getElementById("resutadoF1");
    populaçao.textContent = varancia();




}