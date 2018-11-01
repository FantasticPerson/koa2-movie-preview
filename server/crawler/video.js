const puppeteer = require('puppeteer')
const base = 'https://movie.douban.com/subject/'
const doubanId = `26985127`
const videoBase =`https://movie.douban.com/trailer/234740/`

const sleep = time=>new Promise(resolve=>{
    setTimeout(resolve,time)
})
;(async ()=>{
    console.log('Start visit this target page')
    const browser = await puppeteer.launch({
        args:["--no-sandbox"],
        dumpio:false
    })

    const page = await browser.newPage()
    await page.goto(base+doubanId,{
        waitUntil:'networkidle2'
    })
    await sleep(3000)
    // await page.waitForSelector('.more')
    // for(i=0;i<1;i++){
    //     await sleep(3000)
    //     await page.click('.more')
    // }
    console.log('123')
    const result = await page.evaluate(()=>{
        var $ = window.$
        var it = $('.related-pic-video')
        console.log(666)
        if(it && it.length>0){
            debugger
            var link = it.attr('href')
            var cover = it.find('img').attr('src')
            return {
                link,
                cover:cover
            }
        }
        console.log('123')
        return {}
    })
    console.log(123)
    console.log(result)
    let video 
    if(result.link){
        console.log(result.link)
        await page.goto(result.link,{
            waitUntil:'networkidle2'
        })
        await sleep(6000)
        console.log('eee')
        video = await page.evaluate(()=>{
            var $ = window.$
            console.log('fff')
            var it = $('.source')
            if(it && it.length>0){
                return it.attr('src')
            }
            return ''
        })
    }
    const data = {
        video,
        doubanId,
        cover:result.cover
    }
    browser.close()
    process.send(data)
    process.exit(0)
    // console.log(result)
})()