const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('OK')
})
    .catch(err => {
        console.log(err)
    })


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    this.first = 'hoge'
    this.last = 'moge'
    console.log('save now')
})

personSchema.post('save', async function () {
    console.log('save was')
})

const Person = mongoose.model('Person', personSchema)

// Now you can create an instance of the Person model
// const yamada = new Person({ first: 'Taro', last: 'Yamada' });

// console.log(yamada.fullName)

// yamada.save()