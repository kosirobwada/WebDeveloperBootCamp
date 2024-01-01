// axios.get('https://swapi.dev/api/people/1')
//     .then(res => console.log(res))
//     .catch(e => {
//         console.log(e)
//     })

// const getStarWarsPerson = async () => {
//     const res = await axios.get('https://swapi.dev/api/people/1')
//     console.log(res.data)
// }

// const getStarWarsPerson = async (id) => {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//     console.log(res.data.name)
// }

// getStarWarsPerson(6)

const jokes = document.querySelector('#jokes')

const button = document.querySelector('button')

const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config,)
        //console.log(res.data.joke)
        return res.data.joke
    }
    catch (e) {
        return 'No Jokes. Sorry.'
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}

button.addEventListener('click', addNewJoke)