var Promise = require('promise')
var readFile = Promise.denodeify(require('fs').readFile)

module.exports = {
    //Example 
    buyAnIphone : (iphoneName) => {
        return new Promise((fulfill, reject) => {
            // 'fulfill' state = a promise representing a successful operation
            // 'reject' state = a promise representing a failed operation
            var isHappy = false
            if (isHappy) {
                const phone = {
                    name: iphoneName,
                    color: 'black'
                }
                fulfill(phone)
            } else {
                const reason = Error('I am not happy with this')
                reject(reason)
            }
        })
    },
    readJsonFile : (jsonFileName) => {
        return readFile(jsonFileName, 'utf-8').then((response) => {
            return JSON.parse(response)
        }).catch( (err) => {
            console.log(err)
        })
    }
}