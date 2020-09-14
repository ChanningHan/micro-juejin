const router = require('koa-router')()

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
            comment: item.article_info.comment_count,
            photo: item.article_info ? item.article_info.cover_image : ''
        }
    }))

    /*阻塞接口数据返回*/
    await new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1500)
    })


    ctx.body = {
        code: 0,
        data: {
            list,
            cursor: res.data.cursor
        }
    }
})

router.get('/boilingList', async ctx => {
    const res = await axios.post('https://apinew.juejin.im/recommend_api/v1/short_msg/recommend', {
        "id_type": 2,
        "sort_type": 300,
        "cursor": ctx.query.cursor,
        "limit": ~~ctx.query.limit || 20
    })
    ctx.body = {
        code: 0,
        data: {
            cursor: res.data.cursor,
            list: res.data.data,
        }
    }
})


module.exports = router