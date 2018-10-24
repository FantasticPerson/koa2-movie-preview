let koa = require('koa')
let app = new koa()
let logger = require('koa-logger')
let convert = require('koa-convert')

let indent = (n) => {
    return new Array(n).join('&nbsp;')
}

let mid1 = () => async (ctx, next) => {
    ctx.body = '<h3>请求=>第一层中间件</h3>'
    next()
    ctx.body += '<h3>响应<= 第一层中间件</h3>'
}


let mid2 = () => async (ctx, next) => {
    ctx.body = '<h3>' + indent(4)'请求=>第二层中间件</h3>'
    next()
    ctx.body += '<h3>' + indent(4)'响应<= 第二层中间件</h3>'
}

let mid3 = () => async (ctx, next) => {
    ctx.body = '<h3>' + indent(8)'请求=>第三层中间件</h3>'
    next()
    ctx.body += '<h3>' + indent(8)'响应<= 第三层中间件</h3>'
}


app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)

app.use(async (ctx, next) => {
    this.body += '<p style="color:#f60">' + indent(12) + 'Koa 核心 处理业务</p>'
})

app.listen(2333)
