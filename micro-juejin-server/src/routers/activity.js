const axios = require('axios')

const router = require('koa-router')()


router.get('/bannerList', async ctx => {
    const res = await axios.get('https://apinew.juejin.im/event_api/v1/event/banner_list')
    ctx.body = {
        code: 0,
        data: {
            list: res.data.data,
            err_msg: res.data.err_msg,
            err_no: res.data.err_no
        }
    }
})

router.get('/monthStat', async ctx => {
    const res = await axios.post('https://apinew.juejin.im/event_api/v1/event/month_stat',{
        days: 42,
        from_date: ctx.query.from_date
    })
    ctx.body = {
        code: 0,
        data: {
            list: res.data.data,
            err_msg: res.data.err_msg,
            err_no: res.data.err_no
        }
    }
})




module.exports = router