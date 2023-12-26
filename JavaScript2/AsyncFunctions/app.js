async function hello() {

}

const sing = async () => {
    throw new Error('問題が起きました！！！');
    return 'らららららら';
}

// sing()
//     .then((data) => {
//         console.log('成功：', data);
//     })
//     .catch((err) => {
//         console.log('エラ−！！')
//         console.log(err);
//     });

const login = async (username, password) => {
    if (!username || !password) {
        throw new Error('ユーザー名またはパスワードがありません');
    }
    if (password === 'secret') {
        return 'ようこそ！！！';
    }

    throw new Error('パスワードが間違ってます');
}

// login('hoge', 'secret')
//     .then(msg => {
//         console.log('ログイン成功！');
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log('エラー！！！');
//         console.log(err);
//     })




const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
}

// rainbow()
//     .then(() => {
//         console.log('rainbow完了！');
//     });

async function printRainbow() {
    await rainbow();
    console.log('rainbow完了!!!');
}

// printRainbow();


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

async function makeRequest() {
    try {
        const data1 = await fakeRequest('/hoge1');
        console.log(`data1: ${data1}`);
        const data2 = await fakeRequest('/hoge2');
        console.log(`data2: ${data2}`);
    } catch (e) {
        console.log('エラー発生！！！');
        console.log(e);
    }
}

makeRequest();