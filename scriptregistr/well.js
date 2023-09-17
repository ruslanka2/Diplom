document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  )
    .then((response) => response.json())
    .then((data) => {
      const bitcoinPrice = data.bitcoin.usd;
      const bitcoinPriceElement = document.getElementById("bitcoin-price");
      bitcoinPriceElement.textContent = `Btc: ${bitcoinPrice} $`;
    })
    .catch((error) => {
      console.error("Ошибка при получении данных о курсе btc:", error);
    });

  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  )
    .then((response) => response.json())
    .then((data) => {
      const ethereumPrice = data.ethereum.usd;
      const ethereumPriceElement = document.getElementById("ethereum-price");
      ethereumPriceElement.textContent = `Eth: ${ethereumPrice} $`;
    })
    .catch((error) => {
      console.error("Ошибка при получении данных о курсе eth:", error);
    });
});
