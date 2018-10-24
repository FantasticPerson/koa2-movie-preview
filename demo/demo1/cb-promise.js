// const fs = require('fs')
// fs.readFile('./package.json','utf-8',(err,data)=>{
//     if(err) return' console.log(err)
//     data = JSON.stringify(data)
//     console.log(data.name)
// })

// function readFileAsync() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./package.json', 'utf8', (err, data) => {
//             if (err) { reject(err) }
//             else {
//                 data = JSON.stringify(data)
//                 resolve(data)
//             }
//             // console.log(data.name)
//         })
//     })
// }

// readFileAsync()
// .then(data=>{
//     data = JSON.parse(data)
//     console.log(data.name)
// })
// .catch(err=>{
//     console.log(err)
// })

const util = require('util')
util.promisify(fs.readFile)('./package.json')
.then(JSON.parse)
.then(data=>{
    console.log(data.name)
})
.catch(err=>{
    console.log(err)
})

