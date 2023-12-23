// const myMath = {
//     PI: 3.14,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// console.log(myMath.PI)

// console.log(myMath.square(4))

// console.log(myMath.cube(6))

// const myMath = {
//     PI: 3.14,
//     square(num) {
//         return num * num
//     },
//     cube(num) {
//         return num ** 3
//     }
// }

// console.log(myMath.square(4))

const cat = {
    name: 'tama',
    color: 'grey',
    breed: 'American',
    cry() {
        console.log(this)
        console.log(`${this.color}がニャーと泣きました。`)
    }
}

// console.log(cat)

// console.log(cat.cry())
const cry2 = cat.cry
cry2.name = 'nk'
console.log(cry2())

// function screem() {
//     console.log('aaaaaaaaaa')
// }

// screem()