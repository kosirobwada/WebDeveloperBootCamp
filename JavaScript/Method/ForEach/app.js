const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function print(element) {
//     console.log(element)
// }

// print(numbers[0])
// print(numbers[1])

// numbers.forEach(print);

// numbers.forEach(function print(element) {
//     console.log(element)
// })

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

// movies.forEach(function (movie) {
//     console.log(`${movie.title} : ${movie.score}/100`)
// })

// const texts = ['sdd', 'trr', 'dgs', 'iio'];

// const caps = texts.map(function (t) {
//     return t.toUpperCase();
// })

// console.log(caps)

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// console.log(doubles)

const titles = movies.map(function (movie) {
    return movie.title
})

console.log(titles)