const apiKey = '878fabfd7d8b97b3f3adfbb9';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para consulta de câmbio API
async function getExchangeRate(daMoeda, paraMoeda) {
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data     = await response.json();

        if (data.result === "success"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error("Erro ao buscar a taxa de câmbio");
        }
    }catch(error){
        console.error("Erro:", error);
        return null;
    }
}

document.getElementById("currency-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const valor     = parseFloat(document.getElementById('amount').value);
    const daMoeda   = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

        if (exchangeRate){
            const convertedValue    = valor * exchangeRate;
            const conversao         = document.getElementById('conversao');
            conversao.textContent   = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;

        }else{
            alert("Erro ao buscar cotação de câmbio, favor, tente novamente");
        }
    });