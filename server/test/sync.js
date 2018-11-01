const doSync = (sth,time) => new Promise(resolve=>{
    setTimeout(()=>{
        console.log(sth+'用了'+time+'毫秒')
        resolve()
    },time)
})

const doAsync = (sth,time,cb)=>{
    setTimeout(()=>{
        console.log(sth+'用了'+time+'毫秒')
        cb && cb()
    },time)
}

const doElse = (sth)=>{
    console.log(sth)
}

const Scotte = {doSync,doAsync}
const Meizi = {doSync,doAsync,doElse}



;(async ()=>{
    console.log('case 1: 妹子来到门口')

    await Scotte.doSync('scott 刷牙',1000)
    console.log('啥也没干，一直等')
    await Meizi.doSync('妹子洗澡',2000)
    Meizi.doElse('妹子忙别的事去了')
    // console.log('妹子忙别的事去了')

    console.log('case 3: 妹子来到门口')
    Scotte.doAsync('scotte 刷牙',1000,()=>{
        console.log('卫生间通知妹纸来洗澡')
        Meizi.doAsync('妹子洗澡',2000)
        Meizi.doElse('妹子忙别的事去了')
    })
})()