// function singSong() {
//     console.log('ド')
//     console.log('レ')
//     console.log('ミ')
// }

// singSong();

// function greet(firstName) {
//     console.log(`firstName: ${firstName}`)
// }

// greet('Taro')

// function greet(firstName, lastName) {
//     console.log(`firstName: ${firstName}`)
//     console.log(`lastName: ${lastName}`)
// }

// greet('Wada', 'Koshiro')

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}

// repeat('Hi', 3)

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false
    }
    return x + y
}

let sum = add(3, 7)
console.log(sum)