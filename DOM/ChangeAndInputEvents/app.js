// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function(e) {
// //     console.log('change!!!');
// // });

// input.addEventListener('input', function() {
//     h1.innerText = input.value;
// });

const input = document.querySelector('input')

// input.addEventListener('change', function (e) {
//     console.log('change')
// })

const h1 = document.querySelector('h1')

input.addEventListener('input', function (e) {
    // console.log('change')
    // console.log(e)
    h1.innerText = input.value
})