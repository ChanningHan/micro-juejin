const router = require('koa-router')()

const axios = require('axios')
const querystring = require('querystring')



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