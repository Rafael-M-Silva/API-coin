const url = "https://economia.awesomeapi.com.br/last/";
const coin = "USD-BRL,EUR-BRL,BTC-BRL";

fetch(url + coin)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const dolarReal = data.USDBRL;
    const euroReal = data.EURBRL;
    const btcReal = data.BTCBRL;

    const tittleCoin = document.querySelector(".cotacao h1");
    const valueCoin = document.querySelector(".cotacao span");

    tittleCoin.innerHTML = "Moeda";
    valueCoin.innerHTML = "Valor Atual";

    function createContent(coin) {
      tittleCoin.innerHTML = coin.name || "SISTEMA FORA DO AR";
      valueCoin.innerHTML =
        Number(coin.bid).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) || "";
    }

    const btnCoinBtc = document.querySelector("#btc");
    const btnCoinEuro = document.querySelector("#euro");
    const btnCoinDolar = document.querySelector("#dolar");

    btnCoinBtc.addEventListener("click", () => {
      createContent(btcReal);
    });
    btnCoinEuro.addEventListener("click", () => {
      createContent(euroReal);
    });
    btnCoinDolar.addEventListener("click", () => {
      createContent(dolarReal);
    });
  });
