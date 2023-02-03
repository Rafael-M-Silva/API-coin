const url = 'https://economia.awesomeapi.com.br/last/'
const coin = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch (url + coin)
.then(response => {
    return response.json();
})
.then(data => {
    const dolarReal = data.USDBRL
    const euroReal = data.EURBRL
    const btcReal = data.BTCBRL

    function createContent(coin) {
        const tittleCoin = document.querySelector("#name")
        const valueCoin = document.querySelector("#value")
        
        tittleCoin.innerHTML = `${coin.name}`
        valueCoin.innerHTML = `${coin.bid}`
    }
    
    const btnCoinBtc = document.querySelector("#btc")
    const btnCoinEuro = document.querySelector("#euro")
    const btnCoinDolar = document.querySelector("#dolar")

    btnCoinBtc.addEventListener("click", ()=> {
        createContent(btcReal)
    })
    btnCoinEuro.addEventListener("click", ()=> {
        createContent(euroReal)
    })
    btnCoinDolar.addEventListener("click", ()=> {
        createContent(dolarReal)
    })
})
