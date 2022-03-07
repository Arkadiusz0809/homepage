
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let zlotychElement = document.querySelector(".js-zlotych");



let EUR = 4.65;
let USD = 4.15;
let POUND = 5.50;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let zlotych = +zlotychElement.value;
    let currency = currencyElement.value;


    switch (currencyElement.value) {
        case "EUR":
            result = zlotychElement.value / EUR;
            break;

        case "USD":
            result = zlotychElement.value / USD;
            break;

        case "POUND":
            result = zlotychElement.value / POUND;
            break;
    }
    resultElement.innerHTML = `${zlotych.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong> `;

})