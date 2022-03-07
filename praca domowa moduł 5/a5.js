{

    const calculateResult = (amount, currency) => {
        const EUR = 4.65;
        const USD = 4.15;
        const POUND = 5.50;

        switch (currency) {
            case "EUR":
                return amount / EUR;


            case "USD":
                return amount / USD;


            case "POUND":
                return amount / POUND;

        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong> `;
    };


    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}