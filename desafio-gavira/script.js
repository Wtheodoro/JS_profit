// IDEIAS DE COMO FAZER
// Calcular a distancia com a raiz da soma dos quadrados
// Ordenar as distancias de forma crescente
// organizar as distancias com sua respectiva coordenada.

const dados1 = [20, 32]
const dados2 = [ [40, 88], [18, 56], [99, 2] ]


const mainFunction = (client, stores) => {
    let arr = calcDistance(stores, client)

    console.log(sortCoord(stores, sortUsingJS(arr)))
}

const calcDistance = (storeCoordinates, client) => {
    let arr = []
    storeCoordinates.map((store, i) => {
        const raiz = Math.sqrt((client[0]-store[0])**2 + (client[1]-store[1])**2)
        arr.push([raiz, i])
    })

    return arr
}

const sortUsingJS = (numbers) => {
    // Sorting de array by distance
    function compareNum (a, b) {
        return a[0] - b[0]
    }
    return numbers.sort(compareNum)
}

const sortCoord = (arrayCoord, arrayDist) => {
    // Sorting a new array by coordinates
    let newArry = []
    arrayDist.map((dist) => {
        newArry.push(arrayCoord[dist[1]])
    })

    return newArry
}

mainFunction(dados1, dados2)