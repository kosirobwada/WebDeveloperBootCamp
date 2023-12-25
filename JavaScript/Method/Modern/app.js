// const feline = { legs: 4, family: 'ネコ科' };
// const canine = { family: 'イヌ科', bark: true }

// // const li = { ...feline, ...canine }

// // console.log(li)

// // console.log({ ...feline, color: 'black' })

// const catDog = { ...feline, ...canine }

// console.log(catDog)

// function sum() {
//     return arguments.reduce((total, num) => total + num)
// }

// console.log(sum(1, 2, 3))

// function sum(...nums) {
//     console.log(nums)
// }

// function sum(...nums) {
//     return nums.reduce((total, num) => total + num)
// }

// console.log(sum(1, 2, 3))

// function raceResults(gold, silver, ...rest) {
//     console.log(`${gold}`)
//     console.log(`${silver}`)
//     console.log(`${rest}`)
// }

// // console.log(raceResults('a', 'a', 'f'))

// const scores = [2322, 23432, 234324, 45646]

// const highScore = scores[1];

// constsecondScores = scores[2];

// const [gold, silver, ...rest] = scores

// console.log(rest)

const user = {
    email: 'harve@example.com',
    password: 'sdsdsdsd',
    firstName: 'dad',
    secondName: 'sdsf',
    born: 1930,
    died: 2222,
    bio: 'ffwefffffffff',
    city: 'LOS',
    state: 'asf'
}

// const firstName = user.firstName;

// console.log(firstName)

// const { firstName, lastName, email } = user;

// console.log(email)

// const { born: birthYear } = user

// console.log(birthYear)


// const user2 = {
//     email: 'harve@example.com',
//     password: 'sdsdsdsd',
//     firstName: 'dad',
//     secondName: 'sdsf',
//     born: 1930,
//     bio: 'ffwefffffffff',
//     city: 'LOS',
//     state: 'asf'
// }

// const { died = 'N/A' } = user2

// console.log(died)

// function fullName(user) {
//     const { firstName, lastName } = user
//     return `${firstName}${lastName}`
// }

// function fullName({ firstName, lastName }) {
//     return `${firstName}${lastName}`
// }

// console.log(fullName(user))


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

// movies.filter(movie => movie.score >= 90);
// 
// movies.filter(({ score }) => score >= 90);

// movies.map(movie => {
//     return `${movie.title}${movie.year}:${movie.score}/100`
// })


movies.map(({ title, year, score }) => {
    return `${title}${year}:${score}/100`
})