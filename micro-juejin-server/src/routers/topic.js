const router = require('koa-router')()

const axios = require('axios')
const querystring = require('querystring')



router.get('/list', async ctx => {
    const res = await axios.post('https://apinew.juejin.im/tag_api/v1/query_topic_list', {
        "sort_type": 4,
        "cursor": "0",
        "limit": 50
    })
    ctx.body = {
        code: 0,
        data: {
            list: res.data.data,
        }
    }
})


module.exports = router