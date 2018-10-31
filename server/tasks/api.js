// http://api.douban.com/v2/user/1000001
//http://api.douban.com/v2/movie/subject/1764796

const rp = require('request-promise-native')

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`
    const res = await rp(url)
    return res
}

; (async () => {
    let movies = [
        {
            doubanId: 30304478,
            title: '尽量加油吧!魔法少女胡桃 第二季',
            rate: 0,
            poster: 'https://img3.doubanio.com/f/movie/03d3c900d2a79a15dc1295154d5293a2d5ebd792/pics/movie/tv_default_large.png'
        },
        {
            doubanId: 30360125,
            title: '绝地反击',
            rate: 0,
            poster: 'https://img3.doubanio.com/view/photo/l_ratic_poster/public/p2537865244.jpg'
        }
    ]

    movies.map(async movie =>{
        let movieData = await fetchMovie(movie)
        console.log(movieData)
    })
})()