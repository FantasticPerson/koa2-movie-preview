const express = require('express')
const app = express()


let indent = (n) => {
    return new Array(n).join('&nbsp;')
}

let mid1 = () => (req, res, next) => {
    res.body = '<h3>请求=>第一层中间件</h3>'
    next()
    res.body += '<h3>响应<= 第一层中间件</h3>'
}


let mid2 = () => (req, res, next) => {
    res.body = '<h3>' + indent(4) + '请求=>第二层中间件</h3>'
    next()
    res.body += '<h3>' + indent(4) + '响应<= 第二层中间件</h3>'
}

let mid3 = () => (req, res,next) => {
    res.body = '<h3>' + indent(8) + '请求=>第三层中间件</h3>'
    next()
    res.body += '<h3>' + indent(8) + '响应<= 第三层中间件</h3>'
}


app.use(mid1())
app.use(mid2())
app.use(mid3())

app.get('/', (req, res, next) => {
    console.log('in express')
    res.send('<p style="color:#f60">' + indent(12) + 'Koa 核心 处理业务</p>')
})

app.listen(2338)


// app.get('/', (req, res) => {
//     res.end('Hi Luke')
// })

// app.listen(2333)