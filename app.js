var cartas = [{
        Nome: "Jesus",
        link: "http://mirante.aroucaonline.com/wp-content/uploads/2008/12/xm0083.jpg",
        atributos: { Força: 11, Fe: 11, Obediencia: 11, Sabedoria: 11 }
    },
    {
        Nome: "Sansão",
        link: "https://3.bp.blogspot.com/_tjduKluETBY/TUB2RCYYfZI/AAAAAAAAAoc/m0BNFmard7E/s320/heroisdafe-%2B%25289%2529.JPG",
        atributos: { Força: 10, Fe: 6, Obediencia: 5, Sabedoria: 5 }
    },
    {
        Nome: "Daniel",
        link: "https://1.bp.blogspot.com/_tjduKluETBY/TUB2qoNY_fI/AAAAAAAAApE/L0Dk_jeRyvI/s320/heroisdafe-%2B%252814%2529.JPG",
        atributos: { Força: 10, Fe: 9, Obediencia: 4, Sabedoria: 9 }
    },
    {
        Nome: "José",
        link: "https://1.bp.blogspot.com/_tjduKluETBY/TUB2QZh9dDI/AAAAAAAAAoM/Z_fbG6EKB88/s320/heroisdafe-%2B%25287%2529.JPG",
        atributos: { Força: 6, Fe: 8, Obediencia: 9, Sabedoria: 7 }
    },
    {
        Nome: "Noé",
        link: "https://4.bp.blogspot.com/_tjduKluETBY/TUB1wkvX1dI/AAAAAAAAAnk/HJCfboWPT4s/s320/heroisdafe-%2B%25282%2529.JPG",
        atributos: { Força: 5, Fe: 9, Obediencia: 9, Sabedoria: 8 }
    },
    {
        Nome: "Davi",
        link: "https://1.bp.blogspot.com/_tjduKluETBY/TUB2qZ09naI/AAAAAAAAAo0/shy6eCF5t-A/s320/heroisdafe-%2B%252812%2529.JPG",
        atributos: { Força: 8, Fe: 7, Obediencia: 9, Sabedoria: 7 }
    },
    {
        Nome: "Salomão",
        link: "https://2.bp.blogspot.com/_tjduKluETBY/TUB2qSnuDLI/AAAAAAAAAo8/MLTgeBn63lg/s320/heroisdafe-%2B%252813%2529.JPG",
        atributos: { Força: 4, Fe: 7, Obediencia: 8, Sabedoria: 10 }
    },
    {
        Nome: "Rute",
        link: "https://2.bp.blogspot.com/_tjduKluETBY/TUB2qYkiTkI/AAAAAAAAAos/xHUPKIStrik/s320/heroisdafe-%2B%252811%2529.JPG",
        atributos: { Força: 2, Fe: 7, Obediencia: 6, Sabedoria: 10 }
    },
    {
        Nome: "Elias",
        link: "https://4.bp.blogspot.com/_tjduKluETBY/TUB2RMbRf6I/AAAAAAAAAok/i_4EXPFLI_M/s320/heroisdafe-%2B%252810%2529.JPG",
        atributos: { Força: 5, Fe: 7, Obediencia: 7, Sabedoria: 10 }
    },
    {
        Nome: "Moisés",
        link: "https://3.bp.blogspot.com/_tjduKluETBY/TUB2QmMqj9I/AAAAAAAAAoU/sJAMNZLVOCQ/s320/heroisdafe-%2B%25288%2529.JPG",
        atributos: { Força: 6, Fe: 7, Obediencia: 9, Sabedoria: 10 }
    },
    {
        Nome: "Jacó",
        link: "https://4.bp.blogspot.com/_tjduKluETBY/TUB2QWXUsXI/AAAAAAAAAoE/VO7I_K_L8yk/s320/heroisdafe-%2B%25286%2529.JPG",
        atributos: { Força: 7, Fe: 7, Obediencia: 8, Sabedoria: 10 }
    },
    {
        Nome: "Isaac",
        link: "https://2.bp.blogspot.com/_tjduKluETBY/TUB1xPBr6oI/AAAAAAAAAn8/pqy-K6RVd9U/s320/heroisdafe-%2B%25285%2529.JPG",
        atributos: { Força: 8, Fe: 7, Obediencia: 5, Sabedoria: 10 }
    },
    {
        Nome: "Sara",
        link: "https://2.bp.blogspot.com/_tjduKluETBY/TUB1w5xUjoI/AAAAAAAAAn0/fHHjrfv8TCM/s320/heroisdafe-%2B%25284%2529.JPG",
        atributos: { Força: 3, Fe: 7, Obediencia: 5, Sabedoria: 10 }
    },
    {
        Nome: "Abraão",
        link: "https://1.bp.blogspot.com/_tjduKluETBY/TUB1w-znEmI/AAAAAAAAAns/wgCFOVfdwpI/s320/heroisdafe-%2B%25283%2529.JPG",
        atributos: { Força: 6, Fe: 7, Obediencia: 7, Sabedoria: 10 }
    }
]
var cartasJogador = []
var cartasMaquina = []
var indiceCartaMaquina
var indiceCartaJogador
var cartaJogador
var cartaMaquina
var atributoSelecionado
var valorJogador
var valorMaquina
var elementoResultado

function sortearCarta() {
    while (cartas.length > 0) {
        var indiceSorteio = parseInt(Math.random() * cartas.length)
        cartasJogador.push(cartas[indiceSorteio])
        cartas.splice(indiceSorteio, 1)
        cartasMaquina.push(cartas[indiceSorteio])
        cartas.splice(indiceSorteio, 1)
    }
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnNovaRodada").disabled = true;
    exibirCartaJogador()
}

function jogar() {
    valorJogador = cartasJogador[0].atributos[recebeSelecionado()]
    valorMaquina = cartasMaquina[0].atributos[recebeSelecionado()]
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnNovaRodada").disabled = false;
    verificaVencedor(valorJogador, valorMaquina)
    opcoes.innerHTML = ""
    valorJogador = ""
    valorMaquina = ""
}

function novaRodada() {
    ocultarCartaMaquina()
    exibirCartaJogador()
    elementoResultado = document.getElementById("resultado")
    elementoResultado.innerHTML = "<div></div>"
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnNovaRodada").disabled = true;
}

function exibirCartaJogador() {
    var divCarta = document.getElementById("carta-jogador")
    divCarta.style.backgroundImage = `url(${cartasJogador[0].link})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = ''
    for (var atributo in cartasJogador[0].atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked=true value='" + atributo + "'>" + atributo + " " + cartasJogador[0].atributos.atributo + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartasJogador[0].Nome}<p>`;
    var quant = `<div class="carta-quantidade">${cartasJogador.length}</div>`;
    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + quant + "</div>";
}

function exibirCartaMaquina() {
    var divCarta = document.getElementById('carta-maquina')
    divCarta.style.backgroundImage = `url(${cartasMaquina[0].link})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = ''
    for (var atributo in cartasMaquina[0].atributos) {
        opcoesTexto += "<div>" + atributo + " " + cartasMaquina[0].atributos.atributo + "</div>";
    }
    var nome = `<p class="carta-subtitle">${cartasMaquina[0].Nome}<p>`;
    var quant = `<div class="carta-quantidade">${cartasMaquina.length}</div>`;
    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + quant + "</div>";
}

function recebeSelecionado() {
    var radioAtributos = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function ocultarCartaMaquina() {
    var divCarta = document.getElementById('carta-maquina')
    divCarta.style.backgroundImage = ``
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = ' ';
    var nome = `?`;
    var quant = `<div class="carta-quantidade">${cartasMaquina.length}</div>`;
    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + quant + "</div>";
}

function verificaVencedor(valorJogador, valorMaquina) {
    elementoResultado = document.getElementById("resultado")
    exibirCartaMaquina()
    if (valorJogador > valorMaquina) {
        elementoResultado.innerHTML = "<p class+'resultado-final'>Você venceu!</p>"
        cartasJogador.push(cartasMaquina[0])
        cartasJogador.push(cartasJogador[0])
        cartasJogador.shift()
        cartasMaquina.shift()
    } else if (valorJogador < valorMaquina) {
        elementoResultado.innerHTML = "<p class+'resultado-final'>Você perdeu!</p>"
        cartasMaquina.push(cartasJogador[0])
        cartasMaquina.push(cartasMaquina[0])
        cartasMaquina.shift()
        cartasJogador.shift()
    } else {
        elementoResultado.innerHTML = "<p class+'resultado-final'>Empatou!</p>"
        cartasMaquina.push(cartasMaquina[0])
        cartasMaquina.shift()
        cartasJogador.push(cartasJogador[0])
        cartasJogador.shift()
    }
    // listaNomes()
    if (cartasJogador.length == 0) {
        alert("Você foi derrotado!")
        document.getElementById("btnSortear").disabled = false;
        document.getElementById("btnJogar").disabled = true;
        document.getElementById("btnNovaRodada").disabled = true;
    }
    if (cartasMaquina.length == 0) {
        alert("Você foi o campeão!")
        document.getElementById("btnSortear").disabled = false;
        document.getElementById("btnJogar").disabled = true;
        document.getElementById("btnNovaRodada").disabled = true;
    }
}

function listaNomes() {
    console.log("Jogador ###################### " + cartasJogador.length)
    for (var z = 0; z < (cartasJogador.length); z++) {
        console.log(cartasJogador[z].Nome)
    }
    console.log("Máquina ###################### " + cartasMaquina.length)
    for (var a = 0; a < (cartasMaquina.length); a++) {
        console.log(cartasMaquina[a].Nome)
    }
}