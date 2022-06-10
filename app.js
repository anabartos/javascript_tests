const sum = (mum1,num2) => {
    return num1 + num2
}
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToyen = function(valueInDollar){
    let valueInYen = valueInDollar *127.9;
    return Math.round(valueInYen * 1e2 ) / 1e2;

}
const fromYenToPound= function(valueInYen){
let valueInPound = valueInYen *0.8;
    return Math.round(valueInPound * 1e2 ) / 1e2;
}

module.exports = { sum, fromEuroToDollar, fromDollarToyen, fromYenToPound, }; 



