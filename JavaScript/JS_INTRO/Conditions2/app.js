const password = prompt('パスワードを入力してください。')
if (password.length >= 6) {
    if (password.indexOf(' ') == -1) {
        console.log('素晴らしいパスワードです。')
    }
    else {
        console.log('パスワードは空白を含んではいけません。')
    }
}
else {
    console.log('6文字以上にしてください。')
}

