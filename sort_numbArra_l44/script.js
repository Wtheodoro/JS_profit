// The challenge here is organize the array by the heigher to lower
// [ 103, 444, 213, 69, 314.88]

// Sort using Map
// Did'nt found yet a solution to order de numbers only using map...
// const sortUsingMap = (numbers) => {
//     numbers.map(i => {
//         let max_number = numbers[0]
//         let max_location = 0
//         if (i > numbers[0]) {
//             numbers[0] = i
        
//         }
//     })
// }
// console.log(sortUsingFor([5, 0.0008, 0.02, 0.9, 0.3, 0]))


// Sort using For
const sortUsingFor = (numbers) => {
   
    for (let j = 0; j < numbers.length -1; j++) {
        // find maximum
        let max_number = numbers[j]
        let max_location = j

        for (let i = j; i < numbers.length; i++) {
            if (numbers[i] > max_number) {
                max_number = numbers[i]
                max_location = i
            }
        }
        // swap the first and the max
        numbers[max_location] = numbers[j]
        numbers[j] = max_number
    }

    return numbers
}
console.log(sortUsingFor([33, 80, 0.2, 91, 34, 10]))



// Sort using JS
const sortUsingJS = (numbers) => {
    // im not sure about what is going on here. but ir worked.
    function compareNum (a, b) {
        return a - b
    }
    return numbers.sort(compareNum).reverse()
}
console.log(sortUsingJS([5, 8, 2, 9, 3, 10])) // [10, 9, 8, 5 ,3 ,2]