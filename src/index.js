console.log('Using Promise to read Json File in Node.js')

let fileManager = require('./fileManager')
fileManager.buyAnIphone('Ip X').then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err)
})

fileManager.readJsonFile('./src/data.json').then( (jsonObject) => {
    console.log(`Email list = ${jsonObject['emails']}`)
})