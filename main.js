const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currOne}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const rate = data.rates[currTwo];
            rateEl.innerText = `1 ${currOne} = ${rate} ${currTwo}`;

            amountTwo.value = (amountOne.value * rate).toFixed(2);
        })
}

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})


calculate();