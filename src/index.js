console.log('Using Promise to read Json File in Node.js')
let fileManager = require('./fileManager')
const nodeMailer = require('nodemailer')
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xxx@gmail.com',
        pass: 'xxx' // type your pass word
    }

})
fileManager.buyAnIphone('Ip X').then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err)
})

fileManager.readJsonFile('./src/data.json').then( (jsonObject) => {
    console.log(`Email list = ${jsonObject['emails']}`)
    let mailOptions = {
        from: 'xxx@gmail.com',
        to: jsonObject['emails'],
        subject: 'Sending email using Nodejs',
        text: 'this is email sending by Nodejs with nodema  iler'
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Email send : ${info.response}`)
        }
    })
})