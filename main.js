// kata 1 add

function addNum(a, b) {
    return a + b
}

console.log(addNum(4, 5)) 

// kata 2 multiply (without using * 'multiplication'operator)

function multiplyNum(a, b) {
    let multiplyTotal = 0

    for (let index = 0; index < b; index++) {

        multiplyTotal = addNum(multiplyTotal, a)
        // console.log(multiplyTotal)
        // console.log(addNum(4, 5))  
    }

    return multiplyTotal
}
console.log(multiplyNum(4, 5)) 


// kata 3 power/exponentiation (without using ** 'power' operator)

function raiseToPower(x, n) {
    let powerTotal = x

    for (let index = 1; index < n; index++) {

        powerTotal = multiplyNum(powerTotal, x)
        // console.log(powerTotal)
    }

    return powerTotal

}
console.log(raiseToPower(4, 5)) 


// created subtraction function for use in the following function(s), hope it's allowed //

function subtractNum(a, b) {
    return a - b
}
console.log(subtractNum(4, 5))



// Kata 4 factorial (without using built-in math functions or operators), this code uses an array, code below this commented out section does not use an array

// function getFactorial(n) {
// let factorBase = n
// let factorStep //temporarily holds each multiplication result of the factorial to be added together
// let factorArray = []
// let factorArrayTotal


// for (let index = 1; index < n; index++) {

//     let factorMultiplier = subtractNum(factorBase, 1)
//     factorStep = multiplyNum(n, factorMultiplier)
//     // console.log(factorStep)

//     factorArray.push(factorStep)
//     // console.log(factorArray)

//     factorBase--

// }

// factorArrayTotal = factorArray.reduce(addNum, 0)
// // console.log(factorArrayTotal)

//     return factorArrayTotal

// }
// console.log(getFactorial(5))


// kata 4 code, without using an array //


function getFactorial(n) {
    let factorBase = n
    let factorResult
    let factorMultiplier1 = n

    for (let index = 1; index < (n); index++) {

        let factorMultiplier2 = subtractNum(factorBase, 1)
        factorResult = multiplyNum(factorMultiplier1, factorMultiplier2)
        // console.log(factorResult)

        factorBase--

        factorMultiplier1 = factorResult
        // console.log(factorMultiplier1)

    }
    return factorResult

}

console.log(getFactorial(7))



// Kata 5 Fibonacci -  this code uses an array, below this commented out section is the code for kata 5 that does not use an array //


// let arrayFib = [0, 1]

// function Fibonacci(n) {

//     for (let index = 2; index < n; index++) {
//         arrayFib[index] = addNum(arrayFib[subtractNum(index, 2)], arrayFib[subtractNum(index, 1)])
//         console.log(arrayFib[index])
//         console.log(arrayFib)
//     } //for loop to generate arrayFib up to nth number

//     index = subtractNum(arrayFib.length, 1) //to get the index position of the nth number
//     console.log(index)

//     return arrayFib[index]

// }

// console.log(Fibonacci(10))


// kata 5 Fibonacci without using an array //

let fibonacciA = 0
let fibonacciB = 1
let fibonacciC

function Fibonacci(n) {

    for (let index = 2; index < n; index++) {

        fibonacciC = addNum(fibonacciA, fibonacciB)
        fibonacciA = fibonacciB
        fibonacciB = fibonacciC
    }
    return fibonacciC

}

console.log(Fibonacci(10))
