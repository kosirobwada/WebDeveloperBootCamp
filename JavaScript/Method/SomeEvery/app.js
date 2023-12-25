// const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag']

// words.some(word => {
//     return word.length > 4
// })

// words.some(word => word[0] === 'Z')

// words.some(w => w.includes('cake'))

// words.every(word => {
//     return word.length === 3
// })

// words.every(word => word[0] === 'd')

// words.every(w => {
//     let last = w[w.length - 1]
//     return last === 'g'
// })

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// exams.every(exam => exam >= 75);

// exams.some(exam => exam > 90)


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

movies.some(movie => movie.year > 2015)