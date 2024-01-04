const express = require('express');
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const Product = require('./models/product')
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB OK')
})
    .catch(err => {
        console.log(err)
    })

const categories = ['果物', '野菜', '乳製品']

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
    const { category } = req.query
    if (category) {
        const products = await Product.find({ category: category })
        res.render('products/index', { products, category })
    }
    else {
        const products = await Product.find({});
        // res.send(products)
        // console.log(products)
        // res.send('商品一覧を表示予定')
        res.render('products/index', { products, category: '全' })
    }
})

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    // console.log(req.body)
    const newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    // res.send('商品を作成します')
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    // console.log(product)
    // res.send('詳細ページ')
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    // console.log(req.body)
    // res.send('PUT')
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    // res.send('削除')
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.listen(3000, () => {
    console.log('port3000でリクエスト待ち受け中')
})