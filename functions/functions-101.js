// Function - input, code, output

let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()

let square = function(num) {
    let result = num*num
    return result
}

let num = 3
let num2 = 10

//console.log(square(num))
//console.log(square(num2))

let convertFahrenheitToCelsius = function(temp){
    let cels = (temp - 32) * 5/9
    return cels
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))