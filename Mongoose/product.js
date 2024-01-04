const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('OK')
})
    .catch(err => {
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 10
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price is over 0']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

// productSchema.methods.greet = function () {
//     console.log('Hello')
//     console.log(`${this.name}からの呼び出しです`)
// }

const Product = mongoose.model('Product', productSchema)

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'zhage' })
//     foundProduct.greet()
// }

// findProduct()

// const bike = new Product({
//     name: 'maunten bike',
//     price: 59800
// })

// const bike = new Product({
//     name: 'zhage',
//     price: 2980,
//     categories: ['saik'],
//     size: 'S'
// })

// bike.save().then(data => {
//     console.lod('OK');
//     console.log(data)
// }).catch(err => {
//     console.log('err');
//     // console.log(err.errors.name.properties.message)
// })

// // Product.findOneAndUpdate({ name: 'Air' }, { price: -1990 }, { new: true, runValidators: true }).then(data => {
// //     console.lod('OK');
// //     console.log(data)
// // }).catch(err => {
// //     console.log('err');
// //     // console.log(err.errors.name.properties.message)
// // })

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'zhage' })
//     console.log(foundProduct)
//     await foundProduct.toggleOnSale()
//     console.log(foundProduct)
// }

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'zhage' });
//     console.log(foundProduct);
//     await foundProduct.toggleOnSale();
//     console.log(foundProduct);
// };

// productSchema.methods.toggleOnSale = function () {
//     this.onSale = !this.onSale
//     return this.save()
// }

// productSchema.methods.toggleOnSale = function () {
//     this.onSale = !this.onSale;
//     return this.save();
// };

// findProduct()

// const run = async () => {
//     const foundProduct = await Product.findOne({ name: 'zhage' });
//     console.log(foundProduct);
//     await foundProduct.toggleOnSale();
//     console.log(foundProduct);
// };

// run();

// productSchema.statics.fireSale = function () {
//     return this.updateMany({}, { onSale: true, price: 0 })
// }

// Product.fireSale().then(res => console.log(res))


// Define the static method
// productSchema.statics.fireSale = function () {
//     return this.updateMany({}, { onSale: true, price: 0 });
// };

// Define the static method
productSchema.statics.fireSale = async function () {
    const products = await this.find();  // Get all products
    for (const product of products) {
        product.onSale = true;
        product.price = 0;
        await product.save();
    }
    return { success: true, message: 'Fire sale complete!' };
};

// const Product = mongoose.model('Product', productSchema);

// 使用例
Product.fireSale().then(res => console.log(res));