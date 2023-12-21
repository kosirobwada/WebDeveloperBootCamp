// const password = prompt('パスワードを入力してください。')

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('素晴らしいパスワードです。')
// }
// else {
//     console.log('パスワードが無効です。')
// }

// const age = -10
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log('無料')
// }
// else if (age >= 5 && age < 10) {
//     console.log('子供料金')
// }
// else if (age >= 10 && age < 65) {
//     console.log('大人料金')
// } else {
//     console.log('無向な年齢です。')
// }

// let username = prompt('ユーザー名を入力してください.')

// if (!username) {
//     username = prompt('問題が起きました。もう一度入力してください。')
// }

const age = 8
if (!((age >= 0 && age < 5) || age >= 65)) {
    console.log('有料')
}