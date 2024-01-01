const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log('submit')
    const searchTermInput = form.elements.query
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTermInput.value}`)
    const config = {
        params: {
            q: searchTermInput.value
        }
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config)
    // console.log(res.data[0].show.image.medium)

    // const img = document.createElement('IMG')
    // img.src = res.data[0].show.image.medium
    // document.body.append(img)

    makeImages(res.data)
    searchTermInput.value = ''
})

const makeImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}