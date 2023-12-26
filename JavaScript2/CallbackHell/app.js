// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay);
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000);
//             });
//         });
//     });
// });




// searchMoviesAPI('鬼滅の刃', (movies) => {
//     saveToMyDB(movies, () => {
//         // 保存が成功した場合の処理
//     }, () => {
//         // 保存が失敗した場合の処理
//     })
// }, () => {
//    // 検索が失敗した場合の処理 
// })

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
// }, 1000)


// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange'
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext()
    }, 1000)
}

// delayedColorChange('olive', 2000)
// delayedColorChange('teal', 2000)
// delayedColorChange('olive', 2000)

delayedColorChange('olive', 1000, () => {
    delayedColorChange('pink', 1000, () => {
        delayedColorChange('magenta', 1000, () => {
        })
    })
})