const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log("sum " + sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

console.log("fromEuroToDollar "+fromEuroToDollar(10))

const fromDollarToyen = function(valueInDollar){
    let valueInYen = valueInDollar *127.9;
    return valueInYen;

}

console.log("fromDollarToyen "+fromDollarToyen(10))

const fromYenToPound= function(valueInYen){
let valueInPound = valueInYen *0.8;
    return valueInPound;
}

//YA  PUEDES VER CUAL ES EL RETULTADO QUE TE DEBE DE DAR CON LOS CONSOLE.LOG

console.log("fromYenToPound "+fromYenToPound(10))
module.exports = { sum, fromEuroToDollar, fromDollarToyen, fromYenToPound };



