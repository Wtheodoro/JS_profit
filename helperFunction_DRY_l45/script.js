const findMaxHelper = (numbers, start) => {
    let maximum = numbers[start]
    let max_location = start
    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i]
            max_location = i
        }
    }
    return {
        max_number: maximum,
        max_index: max_location
    }
}

const sortHigherWithHelper = (numbers) => {
    // run as many times as there are items
    for (let j = 0; j < numbers.length - 1; j++) {
        
        // find max and sorting out starting from j
        let {max_number, max_index} = findMaxHelper(numbers, j)

        // swap the first and max item in an array
        numbers[max_index] = numbers[j]
        numbers[j] = max_number
    }
    return numbers
}

console.log(sortHigherWithHelper([5, 2, 9, 3, 7]))
