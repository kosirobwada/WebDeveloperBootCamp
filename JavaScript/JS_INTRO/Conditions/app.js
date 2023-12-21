// console.log('分岐の前')
// let random = Math.random()
// console.log(random)
// if (random < 0.5) {
//     console.log('数字は0.5より小さい')
// }
// if (random >= 0.5) {
//     console.log('数字は大きい')
// }
// console.log('分岐の後')

const dayOfWeek = prompt('英語で曜日を入力してください。').toLowerCase();
if (dayOfWeek === 'monday') {
    console.log('憂鬱')
}
else if (dayOfWeek === 'saturday') {
    console.log('最高')
}
else if (dayOfWeek === 'friday') {
    console.log('花金')
}
else {
    console.log('はあ。')
}

// const age = 55
// if (age < 5) {
//     console.log("無料")
// }
// else if (age < 10) {
//     console.log('子供料金')
// }
// else if (age < 65) {
//     console.log('大人料金')
// }
// else {
//     console.log('シニア料金')
// }