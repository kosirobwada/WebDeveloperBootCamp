const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB OK')
})
    .catch(err => {
        console.log(err)
    })

// const p = new Product({
//     name: 'ルビーグレープフルーツ',
//     price: 198,
//     category: '果物'
// })

// p.save().then(p => {
//     console.log(p)
// }).catch(e => {
//     console.log(e)
// })


// const seedProducts = [
//     {
//         name: 'ナス',
//         price: 98,
//         category: '野菜'
//     },
//     {
//         name: 'カットメロン',
//         price: 480,
//         category: '果物'
//     },
//     {
//         name: '種無しスイカのカット',
//         price: 380,
//         category: '果物'
//     },
//     {
//         name: 'オーガニックセロリ',
//         price: 198,
//         category: '野菜'
//     },
//     {
//         name: 'コーヒー牛乳',
//         price: 298,
//         category: '乳製品'
//     },
// ];

// Product.insertMany(seedProducts).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })