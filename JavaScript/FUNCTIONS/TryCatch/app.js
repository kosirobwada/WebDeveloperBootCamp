// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log('エラーが起きました。')
// }

function shout(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3))

    }
    catch (e) {
        console.log(e)
        console.log('文字列を入れてください。')
    }
}

// shout('jpge')

shout(1)