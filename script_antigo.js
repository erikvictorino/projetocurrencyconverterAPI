document.getElementById('currency-form'). addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores de entrada
    const valor         = parseFloat(document.getElementById('amount').value);
    const daMoeda       = document.getElementById('daMoeda').value;
    const paraMoeda     = document.getElementById('paraMoeda').value;

    const exchangeRates = {
        USD: {BRL: 5.71, EUR: 0.93},
        EUR: {BRL: 6.16, USD: 1.08},
        BRL: {USD: 0.18, EUR: 0.16},
    };

    // Conversão simples (USD > BRL, BRL > EUR, etc)
    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }
    else{
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda]
    }

    // Exibir resultado da conversão
    const conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;

});

