

    let body = '';

        function convertCurrency(fromCurrency, toCurrency, image) {

            var query = fromCurrency + '_' + toCurrency;
            let apiKey = '34e13dd50e52224f7b59';    

            let url = 'https://free.currconv.com';
            url += '/api/v7/convert?q=' + query;
            url += '&compact=ultra&apiKey=' + apiKey;

            let urlImage = 'img/' + image;

            fetch(url)
                .then(response => response.json())
                .then(data => showData(data, query, urlImage))
                .catch(error => console.log(error))

        }

        function showData(obj, query, urlImage) {
            currency = query.replace("_", " - ");
            currencyPrice = obj[query];
            currencyPriceRound = Number(currencyPrice.toFixed(2));

            currencyPriceFormat = currencyPriceRound.toLocaleString("en-US");
            body += `<div class="col-md-4 text-center mb-4">
                <img src="${urlImage}" alt="currency" class="mb-2">
                        <h2>${currency}</h2>
                        <span>${currencyPriceFormat}</span>
                    </div>`;
            document.getElementById('data').innerHTML = body;
        }

        convertCurrency('USD', 'MXN', 'dolar.jpg'); //dollar usa
        convertCurrency('EUR', 'MXN', 'euro.jpg'); // euro
        convertCurrency('BTC', 'MXN', 'bitcoin.jpg'); //bitcoin



