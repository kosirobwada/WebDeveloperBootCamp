// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// });

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }

const button = document.querySelector('button')

const h1 = document.querySelector('h1')

button.addEventListener('click', () => {
    // console.log('AAA')
    // document.body.style.backgroundColor = 'olive'

    // const newColor = makeRandColor()

    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`

    const sum = r + g + b;

    if (sum > 500) {
        h1.style.color = 'white'
    }
    else {
        h1.style.color = 'black'
    }

    h1.innerText = newColor

})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;

    return `rgb(${r},${g},${b})`
}