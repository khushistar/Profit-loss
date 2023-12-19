let InitialPrice = document.querySelector("#initial-price");
let QuantityOfStocks = document.querySelector("#quantity-of-stocks");
let CurruntPrice = document.querySelector("#currunt-price");
let calculatebtn = document.querySelector("#calculate");
let output = document.querySelector("#output");

function calculateProfitandLoss(initialPrice, curruntPrice, quantity) {
  console.log(initialPrice, curruntPrice, quantity);
  if (initialPrice > curruntPrice) {
    let loss = (initialPrice - curruntPrice) * quantity;
    let lossPrecentage = (loss / initialPrice) * 100;
    showMassage(
      `Loss! The loss is ${loss} and the Lossprecentage is ${lossPrecentage.toFixed(
        2
      )}%`
    );
  } else if (curruntPrice > initialPrice) {
    let profit = (curruntPrice - initialPrice) * quantity;
    let profitPrecentage = (profit / initialPrice) * 100;
    showMassage(
      `Hey! The profit is ${profit} and the Profitprecentage is ${profitPrecentage.toFixed(
        2
      )}%`
    );
  } else {
    showMassage("No pain no gain and no gain no pain");
  }
}

function showMassage(msg) {
  output.innerText = msg;
}
function handleClick() {
  let ip = Number(InitialPrice.value);
  let qnt = Number(QuantityOfStocks.value);
  let cp = Number(CurruntPrice.value);
  calculateProfitandLoss(ip, cp, qnt);
}

calculatebtn.addEventListener("click", handleClick);
