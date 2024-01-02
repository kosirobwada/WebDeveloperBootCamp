const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid')

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))

let comments = [
    {
        id: uuid(),
        username: 'yamada',
        comment: '面白すぎ'
    },
    {
        id: uuid(),
        username: 'suzuki',
        comment: '趣味はサッカー'
    }, {
        id: uuid(),
        username: 'tanaka',
        comment: 'yama-daさん、何が面白いですか'
    }, {
        id: uuid(),
        username: 'wanwan',
        comment: 'わんわんわん'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/comments', (req, res) => {
    console.log(req.body)
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    // res.send('OK')
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

app.patch('comments/:id', (req, res) => {
    const { id } = req.params
    // const comment = comments.find(c => c.id === id)
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText
    // res.send('PATCH')
    res.redirect('/comments')
})

app.post('/tacos', (req, res) => {
    // console.log(req.body)
    const { meat, qty } = req.body
    res.send(`${qty}${meat}どうぞ`)
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
})

app.listen(3000, () => {
    console.log('ポートを待ち受け中...')
})