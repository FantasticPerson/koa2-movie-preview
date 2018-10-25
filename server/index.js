const koa = require('koa')
const app = new koa()
const pug = require('pug')
const {htmlTpl,ejsTpl,pugTpl} = require('./tpl/index')
const ejs = require('ejs')
app.use(async (ctx,next)=>{
    // ctx.body = ejs.render(ejsTpl,{
    //     you:'Luke',
    //     me:'Scott'
    // })
    ctx.body=pug.render(pugTpl,{
        you:'Luke',
        me:'Scott'
    })
    ctx.type = 'text/html;charset=utf-8'
})
app.listen(4455)