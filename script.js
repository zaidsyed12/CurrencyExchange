const fromAmountElement = document.querySelector('.amount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const convertedAmountElement = document.querySelector('.convertedAmount');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');
const converterContainer = document.querySelector('.converterContainer');

const countries = [
    {code: 'AED', name: 'United Arab Emirates Dirham'},
    {code: 'AUD', name: 'Australian Dollar'},
    {code: 'BDT', name: 'Bangladeshi Taka'},
    {code: 'BHD', name: 'Bahraini Dinar'},
    {code: 'BRL', name: 'Brazilian Real'},
    {code: 'CAD', name: 'Canadian Dollar'},
    {code: 'CHF', name: 'Swiss Franc'},
    {code: 'CLP', name: 'Chilean Peso'},
    {code: 'CNY', name: 'Chinese Yuan'},
    {code: 'COP', name: 'Colombian Peso'},
    {code: 'CZK', name: 'Czech Koruna'},
    {code: 'DKK', name: 'Danish Krone'},
    {code: 'DZD', name: 'Algerian Dinar'},
    {code: 'EGP', name: 'Egyptian Pound'},
    {code: 'EUR', name: 'Euro'},
    {code: 'GBP', name: 'British Pound Sterling'},
    {code: 'GHS', name: 'Ghanaian Cedi'},
    {code: 'HKD', name: 'Hong Kong Dollar'},
    {code: 'HUF', name: 'Hungarian Forint'},
    {code: 'IDR', name: 'Indonesian Rupiah'},
    {code: 'INR', name: 'Indian Rupee'},
    {code: 'JPY', name: 'Japanese Yen'},
    {code: 'JOD', name: 'Jordanian Dinar'},
    {code: 'KRW', name: 'South Korean Won'},
    {code: 'KWD', name: 'Kuwaiti Dinar'},
    {code: 'MAD', name: 'Moroccan Dirham'},
    {code: 'MYR', name: 'Malaysian Ringgit'},
    {code: 'MXN', name: 'Mexican Peso'},
    {code: 'NGN', name: 'Nigerian Naira'},
    {code: 'NOK', name: 'Norwegian Krone'},
    {code: 'NZD', name: 'New Zealand Dollar'},
    {code: 'OMR', name: 'Omani Rial'},
    {code: 'PEN', name: 'Peruvian Sol'},
    {code: 'PHP', name: 'Philippine Peso'},
    {code: 'PKR', name: 'Pakistani Rupee'},
    {code: 'PLN', name: 'Polish Zloty'},
    {code: 'PLP', name: 'Palestinian Pound'},
    {code: 'QAR', name: 'Qatari Riyal'},
    {code: 'RUB', name: 'Russian Ruble'},
    {code: 'SAR', name: 'Saudi Riyal'},
    {code: 'SEK', name: 'Swedish Krona'},
    {code: 'SGD', name: 'Singapore Dollar'},
    {code: 'THB', name: 'Thai Baht'},
    {code: 'TRY', name: 'Turkish Lira'},
    {code: 'UAH', name: 'Ukrainian Hryvnia'},
    {code: 'USD', name: 'United States Dollar'},
    {code: 'VND', name: 'Vietnamese Dong'},
    {code: 'ZAR', name: 'South African Rand'},
];

countries.forEach(country => {
    const optionFrom = document.createElement('option');
    optionFrom.value = country.code;
    optionFrom.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = country.code;
    optionTo.textContent = `${country.code} (${country.name})`;
    toCurrencyElement.appendChild(optionTo);

    fromCurrencyElement.value = 'USD';
    toCurrencyElement.value = 'PKR';
});


    const getExchange = async () => {
        const amount = parseFloat(fromAmountElement.value);
        const fromCurrency = fromCurrencyElement.value;
        const toCurrency = toCurrencyElement.value;
        resultElement.textContent = "Fetching Exchange Rates...";
        
        try{
        const apiKey = 'f4c26fcc80cffb8774a7c6dc';  
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
    
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data)
    
        const  convertedRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * convertedRate).toFixed(2);
    
        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
        }
        catch(err)
        {
            converterContainer.innerHTML = `<h2>Error while fetching Exchange Rates! 😔 <h2/>`
        }
}

fromAmountElement.addEventListener('input', getExchange);
fromCurrencyElement.addEventListener('change', getExchange);
toCurrencyElement.addEventListener('change', getExchange);
window.addEventListener('load', getExchange);
