const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToyen = function(valueInDollar){
    let valueInYen = valueInDollar *127.9;
    return valueInYen;

}

const fromYenToPound= function(valueInYen){
let valueInPound = valueInYen *0.8;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToyen, fromYenToPound };



