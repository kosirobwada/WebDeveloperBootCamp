// function callTwice(func) {
//     func()
//     func()
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6)
//     console.log(roll)
// }

// callTwice(rollDie)

// callTenTimes(rollDie)

// function makeRandomFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('おめでとう！')
//         }
//     }
//     else {
//         return function () {
//             alert('ウイルスに感染しました')
//         }
//     }
// }

// const randomFunc = makeRandomFunc()
// randomFunc()

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

// console.log(isBetween(33))

// console.log(makeBetweenFunc(44, 50))

const isChild = makeBetweenFunc(0, 18)

console.log(isChild(7))

const isAdult = makeBetweenFunc(19, 64)

console.log(isAdult(77))