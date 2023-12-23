let maximum = parseInt(prompt('数字を入力してください。'));
while (!maximum) {
    maximum = parseInt(prompt('エラーが起きました、数字を入力してください。'))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = prompt('1つ数字を決めました。数字を当ててみてください。')
let count = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    count++;
    if (guess > targetNum) {
        guess = prompt('その数字より小さいです。')
    }
    else {
        guess = prompt('その数字より大きいです。')
    }
}
if (guess === 'q') {
    console.log('終了します。')
}
else {
    console.log((`おめでとう${count}回で当てました。`))
}