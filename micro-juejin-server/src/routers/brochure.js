const axios = require('axios')

const router = require('koa-router')()



router.get('/list', async ctx => {
    const res = await axios.post('https://apinew.juejin.im/booklet_api/v1/booklet/listbycategory',{
        "category_id": "0",
        "cursor": ctx.query.cursor || '0',
        "limit": ~~ctx.query.limit || 20
    })
    ctx.body = {
        code: 0,
        data: {
            brochureList: res.data.data,
            has_more: res.data.has_more,
            cursor: res.data.cursor,
            err_msg: res.data.err_msg,
            err_no: res.data.err_no
        }
    }
})




module.exports = router