// console.log('やっほー')

// setTimeout(() => {
//     console.log('おーい')
// }, 3000);

// console.log('ばいばい')

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// console.log(id)

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// const odds = nums.filter(n => {
//     return n % 2 === 1;
// })

// console.log(odds)

// const smallNums = nums.filter(n => n < 5)

// console.log(smallNums)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// numbers.filter(num => {
//     return num < 4;
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

// const goodMovies = movies.filter(movie => {
//     return movie.score >= 85;
// })

// console.log(goodMovies)

const badMovies = movies.filter(movie => movie.score < 70);

// console.log(badMovies)

const recentMovies = movies.filter(movie => movie.year > 2010);

// console.log(recentMovies)

const goodMovies = movies.filter(movie => movie.score > 80).map(movie => movie.title);

console.log(goodMovies)