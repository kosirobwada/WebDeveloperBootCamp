const express = require('express')

const app = express()

// console.dir(app)

// app.use((req, res) => {
//     console.log('リクエストを受け付けました。')
//     // console.dir(req)
//     // res.send('リクエストを受けたので、レスポンスを返します')
//     // res.send({ color: 'red' })
//     res.send('<h1>はじめてのwebページ</h1>')
// })

app.get('/cats', (req, res) => {
    // console.log('/catsにリクエストが来ました')
    res.send('nya')
})

app.get('/dogs', (req, res) => {
    // console.log('/catsにリクエストが来ました')
    res.send('wan wan')
})

app.get('/', (req, res) => {
    // console.log('/catsにリクエストが来ました')
    res.send('<h2>Home Page</h2>')
})

app.get('/r/:subreddit', (req, res) => {
    // console.log('/catsにリクエストが来ました')
    // res.send('<h2>Subreddit</h2>')
    // console.log(req.params)
    const { subreddit } = req.params;
    res.send(`<h1>${subreddit}</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log('/catsにリクエストが来ました')
    // res.send('<h2>Subreddit</h2>')
    console.log(req.params)
    const { subreddit, postId } = req.params;
    res.send(`<h1>${subreddit}</h1><h2>${postId}</h2>`)
})

app.get('/search', (req, res) => {
    // console.log(req.query)
    const { q } = req.query
    if (!q) {
        res.send('指定されていません')
    }
    else {
        res.send(`${q}`)
    }
    res.send(`${q}`)
})

app.get('*', (req, res) => {
    res.send('そんなパスは知らない')
})

app.listen(3000, () => {
    console.log('リクエストをポート3000で待ち受け中...')
})