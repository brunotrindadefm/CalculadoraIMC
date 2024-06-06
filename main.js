function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    resultado = document.getElementById('resultado');
    
    if (altura <= 0 || peso <= 0) {
        resultado.textContent = 'Insira valores válidos para altura e peso.';
        return;
    }
    else if (isNaN(peso) || isNaN(altura)) {
        resultado.textContent = 'Insira valores válidos para altura e peso.';
        return;
    }

    const imc = peso / (altura * altura);
    let classificação = "";

    if (imc < 18.5) {
        classificação = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificação = "Peso ideal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificação = "Acima do peso";
    } else {
        classificação = "Obesidade";
    }

    resultado.textContent = 'IMC: ' + imc.toFixed(2) + ' ' + classificação;
}

function mudarBackground() {
    const body = document.body;
    const calculadora = document.getElementById('calculadora');
    const botao = document.getElementById('mudarCoresBotao');
    const botaocalculadora = document.getElementById('botao');

    if (body.style.backgroundColor === "white" || body.style.backgroundColor === "") {
        calculadora.style.border = "3px solid white";
        body.style.backgroundColor = "black";
        calculadora.style.backgroundColor = "orange";
        calculadora.style.color = "black"; 
        botao.style.backgroundColor = "white";
        botao.style.color = "black";
        botaocalculadora.style.backgroundColor = "white";
        botaocalculadora.style.color = "black";
    } else {
        body.style.backgroundColor = "white";
        calculadora.style.border = "4px solid orange";
        calculadora.style.backgroundColor = "black";
        calculadora.style.color = "white"; 
        botao.style.backgroundColor = "orange";
        botao.style.color = "black";
        botaocalculadora.style.backgroundColor = "orange";
        botaocalculadora.style.color = "black";
    }
}
