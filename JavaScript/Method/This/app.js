// const person = {
//     firstName: 'Taro',
//     lastName: 'Yamada',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(person.fullName())

// const person = {
//     firstName: 'Taro',
//     lastName: 'Yamada',
//     fullName: () => {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(person.fullName())

const person = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    delayName: function () {
        setTimeout(function () {
            console.log(this.fullName())
        }, 2000)
    }
}

console.log(person.delayName())