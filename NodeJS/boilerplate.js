const fs = require('fs')

const dirName = process.argv[2] || 'Project'

// console.log(fs)

// fs.mkdir('Dogs', { recursive: true }, err => {
//     console.log('コールバックの中だよ')
//     if (err) throw err;
// });

// console.log('ファイルの一番下だよ')

fs.mkdirSync(dirName)

try {
    fs.writeFileSync(`${dirName}/index.html`, '')
    fs.writeFileSync(`${dirName}/app.js`, '')
    fs.writeFileSync(`${dirName}/app.css`, '')

}
catch (e) {
    console.log(e)
}

console.log('一番下だよ')