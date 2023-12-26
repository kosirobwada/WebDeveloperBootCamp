// const btn = document.querySelector('#v2');

// btn.onclick = function () {
//     console.log('クリックした！');
//     console.log('ほげほげ');
// }

// function scream() {
//     console.log('ああああああああ！！');
//     console.log('いやーーーーー');
// }

// btn.onmouseenter = scream;

// document.querySelector('h1').onclick = () => {
//     alert('h1をクリック');
// }

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function () {
//     alert('クリック！！！');
// });

// function hoge() {
//     console.log('hoge');
// }

// function moge() {
//     console.log('moge');
// }

// const hogemogeButton = document.querySelector('#hogemoge');
// // hogemogeButton.onclick = hoge;
// // hogemogeButton.onclick = moge;

// hogemogeButton.addEventListener('click', hoge);
// hogemogeButton.addEventListener('click', moge);

const btn = document.querySelector('#v2');

// console.dir(btn)

btn.onclick = function () {
    console.log('クリックした');
    console.log('hogehoge')
}

function screem() {
    console.log('AAAAAAAAAAAAAAAAA')
}

btn.onmouseenter = screem;

document.querySelector('h1').onclick = function () {
    alert('h1をクリック');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert('クリック')
})

function hoge() {
    console.log('hoge')
}

function moge() {
    console.log('moge')
}

const hogemogeButton = document.querySelector('#hogemoge')

// hogemogeButton.onclick = hoge;

// hogemogeButton.onclick = moge;

hogemogeButton.addEventListener('click', hoge, { once: true })

hogemogeButton.addEventListener('click', moge, { once: true })