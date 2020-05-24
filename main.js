// kata 1 add

function addNum(a, b) {
    return a + b
}

console.log(addNum(4, 5))  //uncomment to see kata 1 result in console

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
console.log(multiplyNum(4, 5))  //uncomment to see kata 2 result in console


// kata 3 power/exponentiation (without using ** 'power' operator)

function raiseToPower(x, n) {
    let powerTotal = x

    for (let index = 1; index < n; index++) {

        powerTotal = multiplyNum(powerTotal, x)
        console.log(powerTotal)
    }

    return powerTotal

}
console.log(raiseToPower(4, 5))    //uncomment to see kata 3 result in console

// kata 4 factorial (without using built-in math functions or operators)

// created subtraction function for use in following functions, hope it"s allowed

function subtractNum(a, b) {
    return a - b
}
console.log(subtractNum(4, 5))



function getFactorial(n) {
    let factorBase = n
    let factorStep //temporarily holds each multiplication result of the factorial to be added together
    let factorArray = []
    let factorArrayTotal


    for (let index = 1; index < n; index++) {

        // let factorMultiplier = (factorBase - 1)
        let factorMultiplier = subtractNum(factorBase, 1)
        factorStep = multiplyNum(n, factorMultiplier)
        console.log(factorStep)

        factorArray.push(factorStep)
        console.log(factorArray)

        factorBase--

    }

    factorArrayTotal = factorArray.reduce(addNum, 0)
    console.log(factorArrayTotal)

    return factorArrayTotal

}
console.log(getFactorial(5));

// if can't use array in kata 4, then need to put another for loop or if statement to add the factorStep values to get the final result?

// kata 5 Fibonacci

let arrayFib = [0, 1]
// let index

function Fibonacci(n) {

    for (let index = 2; index < n; index++) {
        arrayFib[index] = addNum(arrayFib[subtractNum(index, 2)], arrayFib[subtractNum(index, 1)])
        console.log(arrayFib[index])
        console.log(arrayFib)
    }

    index = subtractNum(arrayFib.length, 1)
    console.log(index)

    return arrayFib[index]

}

console.log(Fibonacci(10))
