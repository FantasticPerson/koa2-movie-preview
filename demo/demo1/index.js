const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const app = new Koa()


app.keys = ['Hi Luke']
// const mid1 = async (ctx,next)=>{
//     ctx.body = 'Hi'
//     await next()
//     ctx.body =ctx.body + ' there'
// }

// const mid2 = async (ctx,next)=>{
//     ctx.type = "text/html; charset=utf-8"
//     await next()
// }

// const mid3 = async (ctx,next)=>{
//     ctx.body = ctx.body + ' Luke'
//     await next()
// }

// function tail(i){
//     if(i>3) return
//     console.log('修改前:'+i)
//     tail(i+1)
//     console.log('修改后'+i)
// }

// function tail(i){
//     if(i>3) return
//     console.log('修改前:'+i)
//     return tail(i+1)
// }

app.use(logger())
app.use(session(app))
// app.use(ctx => {
//     if (ctx.path == '/favicon.ico') return;

//     let n = ctx.session.views || 0
//     ctx.session.views = ++n;
//     ctx.body = n + ' views'
// })
app.use(ctx => {
    if (ctx.path == '/') {
        let n = ctx.session.views || 0
        ctx.session.views = ++n;
        ctx.body = n + ' views'
    } else if(ctx.path == '/hi'){
        ctx.body = 'Hi Luke'
    } else {
        ctx.body = '404'
    }
})
// app.use(mid1)
// app.use(mid2)
// app.use(mid3)

// app.use(async (ctx,next)=>{
//     ctx.body = "Hi Luke"
// })

app.listen(2333)