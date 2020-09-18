const {mock} = require('mockjs');

const router = require('koa-router')()
const Mock = require('mockjs')

const Random = Mock.Random
Random.name()
Random.city(true)
const format = 'yyyy-M-d'
Random.boolean()

Random.extend({
    constellation: function (date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()
// => "水瓶座"
Mock.mock('@CONSTELLATION')
// => "天蝎座"


const superagent = require('superagent');
const axios = require('axios')
const querystring = require('querystring')


router.get('/articleList', async (ctx) => {

    const res = await axios.post('https://apinew.juejin.im/recommend_api/v1/article/recommend_cate_feed', {
        "id_type": 2,
        "sort_type": 200,
        "cate_id": "6809637767543259144",
        "cursor": ctx.query.cursor,
        "limit": ~~ctx.query.limit || 15
    })

    const resultData = res.data.data

    const list = resultData.map((item => {
        return {
            id: item.article_id,
            author: item.author_user_info.user_name,
            title: item.article_info.title,
            date: '3天前',
            tag: item.category.category_name,
            like: item.article_info.digg_count,
            comment:  item.article_info.comment_count,
            photo:  item.article_info?item.article_info.cover_image: ''
        }
    }))

    /*阻塞接口数据返回*/
    await new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 500)
    })


    ctx.body = {
        code: 0,
        data: {
            list,
            cursor: res.data.cursor
        }
    }
})



// let idCount = 0

// router.get('/articleList', async (ctx) => {
//     console.log('ctx.query!!!!!!!!')
//     console.log(ctx.query)
//
//
//     const listStr = `list|${num}`
//     const data = Mock.mock({
//         // 随机生成5到10个元素
//         [listStr]: [{
//             'id|+1': idCount,
//             author: '@name',
//             address: '@city(true)',
//             birth: `@date(${format})`,
//             constellation: '@CONSTELLATION',
//             title: '🏆 技术专题第四期 | 聊聊微前端的那些事',
//             date: '3天前',
//             tag: '前端',
//             like: 1048,
//             comment: 63,
//             photo: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12dc0b36c2e94815b30caf087b78808e~tplv-k3u1fbpfcp-zoom-1.image'
//         }]
//     })
//
//
//     /*阻塞接口数据返回*/
//     await new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, 2500)
//     })
//
//     ctx.body = {
//         code: 0,
//         data,
//     }
//
//     idCount += ~~num
//
// })


module.exports = router