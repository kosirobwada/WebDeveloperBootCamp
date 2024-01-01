// https://swapi.dev/api/people/1

const req = new XMLHttpRequest()

req.onload = function () {
    console.log('seikou')
    // console.log(this.responseText)
    const data = JSON.parse(this.responseText)
    console.log(data.name, data.height)
}

req.onerror = function () {
    console.log('sippai')
    console.log(this)
}

req.open('GET', 'https://swapi.dev/api/people/1')

req.send()
