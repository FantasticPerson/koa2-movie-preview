const koa = require('koa')
const app = new koa()
const {normal} = require('./tpl/index')
app.use(async (ctx,next)=>{
    ctx.body = normal
    ctx.type = 'text/html;charset=utf-8'
})
app.listen(4455)