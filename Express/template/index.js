const express = require('express')

const app = express()

const path = require('path')

const redditData = require('./data.json')
const { red } = require('colors')

// console.log(redditData)

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('hi')
    res.render('home')
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { rand: num })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    if (data) {
        res.render('subreddit', { ...data })

    }
    else {
        res.render('notfound', { subreddit })
    }
})

app.get('/cats', (req, res) => {
    const cats = ['tamta', 'tora', 'kuro', 'momo', 'zizi'];
    res.render('cats', { cats })
})

app.listen(3000, () => {
    console.log('ポート3000で待ち受け中...')
})