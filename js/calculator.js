{
    const formElement = document.querySelector(".js-converterForm");

    const convert = (event) => {
        event.preventDefault();

        convertToPln()
    }

    const convertToPln = () => {
        const inputCurrencyName = document.querySelector(".js-inputCurrencyName").value;
        const inputCurrencyValue = +document.querySelector(".js-inputCurrencyValue").value;

        plnRate = 1;
        usdRate = 3.95;
        eurRate = 4.44;
        psdRate = 4.95;

        switch (inputCurrencyName) {
            case "PLN":
                plnValue = inputCurrencyValue * plnRate;
                break;
            case "USD":
                plnValue = inputCurrencyValue * usdRate;
                break;
            case "EUR":
                plnValue = inputCurrencyValue * eurRate;
                break;
            case "PSD":
                plnValue = inputCurrencyValue * psdRate;
                break;
        }

        convertToOutputCurrency(plnValue, inputCurrencyValue, inputCurrencyName);
    }

    const convertToOutputCurrency = (_plnValue, _inputCurrencyValue, _inputCurrencyName) => {
        const outputCurrencyName = document.querySelector(".js-outputCurrencyName").value;
        let result;

        switch (outputCurrencyName) {

            case "PLN":
                result = plnValue / plnRate;
                break;

            case "USD":
                result = plnValue / usdRate;
                break;

            case "EUR":
                result = plnValue / eurRate;
                break;

            case "PSD":
                result = plnValue / psdRate;
                break;
        }

        console.log(`${_inputCurrencyValue} ${_inputCurrencyName} = ${result} ${outputCurrencyName}`);
        
        const message = `${_inputCurrencyValue} ${_inputCurrencyName} = ${result.toFixed(2)} ${outputCurrencyName}`;
        
        let finalElement = document.querySelector(".final");
        let informationElement = document.querySelector(".information");

        finalElement.innerText = message;
        informationElement.innerText = "(wartości według kursów walut z dnia 14.06.2020 r. godz. 17:50)";

    }
    formElement.addEventListener("submit", convert);
}

/*
let formElement = document.querySelector(".calculator");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstCurrencyName = document.querySelector(".js-firstCurrency-name").value;
    let firstCurrencyValue = +document.querySelector(".js-firstCurrency-value").value;
    let secondCurrencyName = document.querySelector(".js-secondCurrency-name").value;
    let pln, usd, euro, psd, message;


    console.log(firstCurrencyName);
    console.log(firstCurrencyValue);
    console.log(secondCurrencyName);

    switch (firstCurrencyName) {
        case 'pln':
            pln = 1;
            usd = 0.25;
            euro = 0.23;
            psd = 0.2;
            if (firstCurrencyValue === 1)
                var currency = "złoty";
            else if (firstCurrencyValue <= 4)
                var currency = "złote";
            else
                var currency = "złoty";
            break;
        case 'usd':
            pln = 3.95;
            usd = 1;
            euro = 0.89;
            psd = 0.8;
            if (firstCurrencyValue === 1)
                var currency = "dolar amerykański";
            else if (firstCurrencyValue <= 4)
                var currency = "dolary amerykańskie";
            else
                var currency = "dolarów amerykańskich";
            break;
        case 'euro':
            pln = 4.44;
            usd = 1.13;
            euro = 1;
            psd = 0.9;
            var currency = "euro";
            break;
        case 'psd':
            pln = 4.95;
            usd = 1.25;
            euro = 1.11;
            psd = 1;
            if (firstCurrencyValue === 1)
                var currency = "funt";
            else if (firstCurrencyValue <= 4)
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

            if (firstCurrencyValue === 1)
                message = `${firstCurrencyValue} ${currency} = ${plnValue} złoty.`;
            else if (firstCurrencyValue <= 4)
                message = `${firstCurrencyValue} ${currency} = ${plnValue} złote.`;
            else
                message = `${firstCurrencyValue} ${currency} = ${plnValue} złoty.`;

            console.log(message);
            break;
        case 'usd':


            if (firstCurrencyValue === 1)
                message = `${firstCurrencyValue} ${currency} = ${usdValue} dolar amerykański.`;
            else if (firstCurrencyValue <= 4)
                message = `${firstCurrencyValue} ${currency} = ${usdValue} dolary amerykańskie.`;
            else
                message = `${firstCurrencyValue} ${currency} = ${usdValue} dolarów amerykańskich.`;

            console.log(message);
            break;
        case 'euro':
            message = `${firstCurrencyValue} ${currency} = ${euroValue} euro.`;
            console.log(message);
            break;
        case 'psd':

            if (firstCurrencyValue === 1)
                message = `${firstCurrencyValue} ${currency} = ${psdValue} funt.`;
            else if (firstCurrencyValue <= 4)
                message = `${firstCurrencyValue} ${currency} = ${psdValue} funty.`;
            else
                message = `${firstCurrencyValue} ${currency} = ${psdValue} funtów.`;

            console.log(message);
            break;
    }

    let finalElement = document.querySelector(".final");
    let informationElement = document.querySelector(".information");

    finalElement.innerText = message;
    informationElement.innerText = "(wartości według kursów walut z dnia 14.06.2020 r. godz. 17:50)";


});
*/

