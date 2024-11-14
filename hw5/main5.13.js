let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let chosenCurrency;
    for (let item of currencyValues){
        if (item.currency === exchangeCurrency){
            chosenCurrency = item;
        }
    }
    let result = sumUAH/chosenCurrency.value;
    console.log(result);
    return result;
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')