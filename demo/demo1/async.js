const fs = require('fs')

// //回调函数
// function readFile(cb){
//     fs.readFile('./package.json','utf8',(err,data)=>{
//         if(err) return cb(err)
//         data = JSON.parse(data)
//         cb(null,data)
//     })
// }

// readFile((err,data)=>{
//     if(!err){
//         console.log(data.name)
//     }
// })


// //promise
// function readFileAsync() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./package.json', 'utf8', (err, data) => {
//             if (err) { reject(err) }
//             else {
//                 data = JSON.parse(data)
//                 resolve(data)
//             }
//             // console.log(data.name)
//         })
//     })
// }
// readFileAsync().then(data=>{
//     console.log(data.name)
// })

//第三个阶段 co + Generator Function Promise
// const co = require('co')
const util = require('util')

// co(function *(){
//     let data = yield util.promisify(fs.readFile('./package.json'))

//     data = JSON.parse(data)
//     console.log(data.name)
// })

//第四个阶段 Async统一世界
const readAsync = util.promisify(fs.readFile)
async function init(){
    let data = await readAsync('./package.json')
    data = JSON.parse(data)
    console.log(data.name)
}

init()