const prices = [980, 1500, 1980, 4980, 2980]

// let total = 0

// for (let price of prices) {
//     total += price
// }

// console.log(total)
// prices.reduce((total, price) => {
//     return total + price
// })

// prices.reduce((total, price) => total + price)

// prices.reduce((min, price) => {
//     if (min > price) {
//         return price
//     }
//     else return min
// })

// prices.reduce((max, price) => {
//     if (max < price) {
//         return price
//     }
//     else return max
// })

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

// const highMovie = movies.reduce((bestMovie, currMovie) => {
//     if (bestMovie.score < currMovie.score) {
//         return currMovie
//     }
//     else {
//         return bestMovie
//     }
// })

// console.log(highMovie)

const evens = [2, 4, 6, 8]

const sum = evens.reduce((sum, num) => sum + num, 100);

console.log(sum)