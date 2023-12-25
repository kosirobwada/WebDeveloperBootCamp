// const add = function (x, y) {
//     return x + y;
// }

// console.log(add(4, 5))

// const add = (x, y) => {
//     return x + y
// }

// console.log(add(5, 6))

// const square = (num) => {
//     return num * num
// }

// console.log(square(2))

// const rollDie = () => {
//     return Math.random()
// }

// console.log(rollDie())

// const square = x => {
//     return x * x * x
// }

// console.log(square(4))

// const rollDie = () => (
//     Math.random()
// );

// console.log(rollDie())

// const isEven = function (num) {
//     return num % 2 === 0;
// }

// const isEven2 = (num) => {
//     return num % 2 === 0;
// }

// const isEven3 = num => {
//     return num % 2 === 0;
// }

// const isEven4 = num => (
//     num % 2 === 0
// );

// const isEven5 = num => num % 2 === 0;

// console.log(isEven(1));

// console.log(isEven2(2));

// console.log(isEven3(3));

// console.log(isEven4(4));

// console.log(isEven5(5));

// const rollDie = () => (
//     Math.random()
// );

// console.log(rollDie())

// const add = (x, y) => (
//     x + y
// );

// console.log(add(4, 5))

// const add = (x, y) => x + y;

// console.log(add(4, 5))

const movies = [
    {
        title: 'Amdases',
        score: 99
    },
    {
        title: 'Sfsdfss',
        score: 93
    },
    {
        title: 'Fgsfs',
        score: 33
    },
    {
        title: 'Amfdhdfhses',
        score: 55
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score}`
// })

// console.log(newMovies)


const newMovies = movies.map(movie =>
    `${movie.title} - ${movie.score}`
);

console.log(newMovies)