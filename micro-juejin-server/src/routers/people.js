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
    ctx.body = 'people index'
})

router.get('/list', async(ctx) => {
    const data = Mock.mock({
        // 随机生成5到10个元素
        'list|5-10': [{
            'id|+1': 1,
            name: '@name',
            address: '@city(true)',
            birth: `@date(${format})`,
            constellation: '@CONSTELLATION'
        }]
    })

    /*阻塞接口数据返回*/
    await new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },1500)
    })

    ctx.body = {
        code: 0,
        data,
    }

})


module.exports = router