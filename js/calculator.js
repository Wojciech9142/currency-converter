let formElement = document.querySelector(".calculator");

formElement.addEventListener("submit", (event) => {
    event.defaultPrevented;

    let firstCurrencyName = document.querySelector(".firstCurrency--name").value;
    let firstCurrencyValue = +document.querySelector(".firstCurrency--value").value;
    let secondCurrencyName = document.querySelector(".secondCurrency--name").value;

    console.log(firstCurrencyName);
    console.log(firstCurrencyValue);
    console.log(secondCurrencyName);

    switch (firstCurrencyName) {
        case 'pln':
            var pln = 1;
            var usd = 0.25;
            var euro = 0.23;
            var psd = 0.2;
            if (firstCurrencyValue === 1)
                var currency = "złoty";
            else if (firstCurrencyValue <= 4)
                var currency = "złote";
            else
                var currency = "złoty";
            break;
        case 'usd':
            var pln = 3.95;
            var usd = 1;
            var euro = 0.89;
            var psd = 0.8;
            if (firstCurrencyValue === 1)
                var currency = "dolar amerykański";
            else if (firstCurrencyValue <= 4)
                var currency = "dolary amerykańskie";
            else
                var currency = "dolarów amerykańskich";
            break;
        case 'euro':
            var pln = 4.44;
            var usd = 1.13;
            var euro = 1;
            var psd = 0.9;
            var currency = "euro";
            break;
        case 'psd':
            var pln = 4.95;
            var usd = 1.25;
            var euro = 1.11;
            var psd = 1;
            if(firstCurrencyValue === 1)
                var currency = "funt";
            else if(firstCurrencyValue <= 4)
                var currency = "funty";
            else
                var currency = "funtów";
            break;

        default:
            console.log("sorry, no accepted currency");
            break;

    }

    let plnValue = (firstCurrencyValue * pln).toFixed(2);
    let usdValue = (firstCurrencyValue * usd).toFixed(2);
    let euroValue = (firstCurrencyValue * euro).toFixed(2);
    let psdValue = (firstCurrencyValue * psd).toFixed(2);

    switch (secondCurrencyName) {
        case 'pln':
            var message = `${firstCurrencyValue} ${currency} = ${plnValue} złotych.`;
            console.log(message);
            break;
        case 'usd':
            var message = `${firstCurrencyValue} ${currency} = ${usdValue} dolarów amerykańskich.`;
            console.log(message);
            break;
        case 'euro':
            var message = `${firstCurrencyValue} ${currency} = ${euroValue} euro.`;
            console.log(message);
            break;
        case 'psd':
            var message = `${firstCurrencyValue} ${currency} = ${psdValue} funtów.`;
            console.log(message);
            break;
    }

    let finalElement = document.querySelector(".final");
    let informationElement = document.querySelector(".information");

    finalElement.innerText = `${message}`;
    informationElement.innerText = "(wartości według kursów walut z dnia 14.06.2020r. godz. 17:50)";

    
});