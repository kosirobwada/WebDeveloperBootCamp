const figlet = require('figlet')
const colors = require('colors')

figlet('Rainbow', function (err, data) {
    if (err) {
        console.dir(err);
        return
    }
    console.log(data.rainbow)
})