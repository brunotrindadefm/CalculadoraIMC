function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (altura <= 0 || peso <= 0) {
        result.textContent = 'Por favor, insira valores válidos para altura e peso.';
        return;
    }

    const imc = peso / (altura * altura);
    resultado = document.getElementById('resultado');
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