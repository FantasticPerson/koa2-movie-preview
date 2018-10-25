// const koa = require('koa')
// const app = new koa()
// const pug = require('pug')
// const {htmlTpl,ejsTpl,pugTpl} = require('./tpl')
// const ejs = require('ejs')
// app.use(async (ctx,next)=>{
//     // ctx.body = ejs.render(ejsTpl,{
//     //     you:'Luke',
//     //     me:'Scott'
//     // })
//     ctx.body=pug.render(pugTpl,{
//         you:'Luke',
//         me:'Scott'
//     })
//     ctx.type = 'text/html;charset=utf-8'
// })
// app.listen(4455)

const koa = require('koa')
const app = new koa()
const views = require('koa-views')
const {resolve} = require('path')

app.use(views(resolve(__dirname,'./views'),{
    extension:'pug'
}))
app.use(async (ctx,next)=>{
    await ctx.render('index',{
        you:'Luke',
        me:'Scott'
    })
})
app.listen(4455)