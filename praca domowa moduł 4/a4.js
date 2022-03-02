
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let zlotychElement = document.querySelector(".js-zlotych");



let euro = 4.65;
let dolar = 4.15;
let pound = 5.50;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let zlotych = +zlotychElement.value;
    let currency = currencyElement.value;


    switch (currencyElement.value) {
        case "euro":
            result = zlotychElement.value / euro;
            break;

        case "dolar":
            result = zlotychElement.value / dolar;
            break;

        case "pound":
            result = zlotychElement.value / pound;
            break;
    }
    resultElement.innerHTML = `${zlotych.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong> `;

})