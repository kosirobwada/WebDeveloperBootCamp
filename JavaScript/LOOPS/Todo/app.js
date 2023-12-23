let instruct = prompt('コマンドを入力して下さい。(new,quit,list,delete)');
while (instruct !== 'new' && instruct !== 'quit' && instruct !== 'list' && instruct !== 'delete') {
    instruct = prompt('無効な値が入力されました。コマンドを入力して下さい。(new,quit,list,delete)');
}

let todo = []

while (instruct !== 'quit') {
    if (instruct === 'new') {
        let content = prompt('追加するものを入力してください。')
        todo.push(content)
        console.log(`${content}を追加しました。`)
    }
    if (instruct === 'list') {
        console.log('*****************')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`)
        }
        console.log('*****************')
    }
    if (instruct === 'delete') {
        let content = parseInt(prompt('削除するものを番号してください。'))
        todo.splice(content, 1)
        console.log(`${content}を削除しました。`)
    }
    instruct = prompt('コマンドを入力して下さい。(new,quit,list,delete)');
    while (instruct !== 'new' && instruct !== 'quit' && instruct !== 'list' && instruct !== 'delete') {
        instruct = prompt('コマンドを入力して下さい。(new,add,list,delete)');
    }
}
console.log('終了しました。')