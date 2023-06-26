





function handleSelectChange() {
    var selectElement = document.getElementById("selectValor");
    var customInput = document.getElementById("customInput");
    if (selectElement.value === "custom") {
        customInput.style.display = "block";

    } else {
        customInput.style.display = "none";
    }
    // console.log(valor);

}


function quantidaLinha(event) {



    var linhasQuantidade = document.getElementById("selectValor");

    if (linhasQuantidade.value === "custom" && event.keyCode === 13) {
        var customInput = document.getElementById("customInput");
        var valor = customInput.value;
    } else {
        var valor = linhasQuantidade.value;
    }


    removerLinhas("tabela-corpo", "tr")

    for (var i = 0; i < valor; i++) {
        criaLinha();
    }


}


function criaLinha() {

    let tabelacorpo = document.getElementById("tabela-corpo");
    let novalinha = document.createElement("tr");


    for (var i = 0; i < 3; i++) {

        let novacelula = document.createElement("td");

        if (i == 0) {


            let novacelulath = document.createElement("th")
            novacelulath.textContent = (tabela.rows.length - 1);
            novalinha.appendChild(novacelulath);
            novacelula.innerHTML = "0";

        } else if (i == 1) {
            novacelula.setAttribute("contenteditable", "true");
            novacelula.innerHTML = "0";




        }

        novacelula.setAttribute("contenteditable", "true");
        novacelula.innerHTML = "0";
        novalinha.appendChild(novacelula);

        tabelacorpo.appendChild(novalinha);



    }

}

function criaLinhaFi(valor1, valor2, total) {

    let tabelacorpo = document.getElementById("taabelaCorpoFi");
    let novalinha = document.createElement("tr");


    for (var i = 0; i < 1; i++) {

        let novaCelula1 = document.createElement("td");
        let novaCelula2 = document.createElement("td2");

        let span = document.createElement("span");
        let span2 = document.createElement("span2");
        let sapnfi = document.createElement("spanfi");
        let sapnSimbolo = document.createElement("spansapnSimbolo");

        span.textContent = valor1;
        span2.textContent = valor2;
        sapnfi.textContent = total;
        sapnSimbolo.textContent = " ├─ ";

        if (i == 0) {

            let novacelulath = document.createElement("th")
            novacelulath.textContent = (tabelacorpo.rows.length);
            novalinha.appendChild(novacelulath);



        }

        novaCelula1.setAttribute("contenteditable", "true");


        novaCelula1.appendChild(span);
        novaCelula1.appendChild(sapnSimbolo);
        novaCelula1.appendChild(span2);
        novaCelula2.appendChild(sapnfi);
        //novaCelula1.textContent = "15";

        novalinha.appendChild(novaCelula1);
        novalinha.appendChild(novaCelula2);
        tabelacorpo.appendChild(novalinha);





    }


}

function removerLinhas(tabela, tipo) {

    var tabela = document.getElementById(tabela);
    var linhas = tabela.querySelectorAll(tipo);

    for (var i = linhas.length - 1; i >= 0; i--) {

        var linha = linhas[i];
        linha.parentNode.removeChild(linha);
    }





}