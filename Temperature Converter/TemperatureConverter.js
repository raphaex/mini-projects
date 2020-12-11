const kelvin = 293
// this value will remain constant.

const celsius = kelvin - 273
//celsius is 20 degrees than kelvin.

let fahrenheit = celsius * 1.8 + 32
//this is the formula to get fahrenheit from celsius.

fahrenheit = Math.floor(fahrenheit)
//this is to get the rounded version of the formula so that the answer will always be the integer that closes to the decimal.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


//bonus quest.
const newton = Math.floor(celsius * (33/100))
console.log(`The Temperature is  ${newton} degrees in newton`)
