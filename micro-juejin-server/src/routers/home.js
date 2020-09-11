const { mock } = require('mockjs');

const router = require('koa-router')()
const Mock = require('mockjs')
const Random = Mock.Random
Random.name()
Random.city(true)
const format = 'yyyy-M-d'
Random.boolean()

Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()
    // => "水瓶座"
Mock.mock('@CONSTELLATION')
    // => "天蝎座"





router.get('/', async(ctx) => {
    ctx.body = 'home index'
})

let idCount = 0

router.get('/articleList', async(ctx) => {
    console.log('ctx.query!!!!!!!!')
    console.log(ctx.query)
    const num = ctx.query.num || 100

    const listStr = `list|${num}`
    const data = Mock.mock({
        // 随机生成5到10个元素
        [listStr]: [{
            'id|+1': idCount,
            author: '@name',
            address: '@city(true)',
            birth: `@date(${format})`,
            constellation: '@CONSTELLATION',
            title: '🏆 技术专题第四期 | 聊聊微前端的那些事',
            date: '3天前',
            tag: '前端',
            like: 1048,
            comment: 63,
            photo:'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12dc0b36c2e94815b30caf087b78808e~tplv-k3u1fbpfcp-zoom-1.image'
        }]
    })


    /*阻塞接口数据返回*/
    await new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },2500)
    })

    ctx.body = {
        code: 0,
        data,
    }

    idCount += ~~num

})


module.exports = router