// MINIMUM
// Find minimum with map
const findMinMap = (numbersArray) => {
    let minimum = numbersArray[0]
    numbersArray.map(i => {
        if (minimum > i) {
            minimum = i
        }
    })
    return minimum
}

// Find minimum with for
function findMinFor (numbers) {
    let minimum = numbers[0]
    for (let i=0; i< numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i]
        }
    }
    return minimum
}

// Find minimum with js
const findMinJS = (numbers) => {
    return Math.min(...numbers)
}
console.log("Find minimum Map", findMinMap([ 20, 3, 5, 89, 22, 7.5]))
console.log("Find minimum For", findMinFor([ 103, 444, 213, 69, 314.88]))
console.log("Find minimum JS", findMinJS([ 0.0225, 1, 0, 0.3, 11]))

// MAXIMUM
// Find maximum with map
const findMaxMap = (numbers) => {
    let maximum = numbers[0]
    numbers.map(i => {
        if (maximum < i) {
            maximum = i
        }
    })
    return maximum
}

// Find maximum with For
const findMaxFor = (numbers) => {
    let maximum = numbers[0]
    for (let index = 0; index < numbers.length; index++) {
        if (maximum < numbers[index]) {
            maximum = numbers[index]
        }
    }
    return maximum
}

// Find maximum with JS

const findMaxJS = (numbers) => {
    return Math.max(...numbers)
}

console.log("Find maximum Map", findMaxMap([ 20, 3, 5, 89, 22, 7.5]))
console.log("Find maximum For", findMaxFor([ 103, 444, 213, 69, 314.88]))
console.log("Find maximum JS", findMaxJS([ 0.0225, 1, 0, 0.3, 11]))