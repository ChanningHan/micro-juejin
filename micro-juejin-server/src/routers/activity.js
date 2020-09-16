const axios = require('axios')

const router = require('koa-router')()
const qs = require('querystring')


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

router.get('/activityList', async ctx => {
   try{
       const postData = {
           "count":~~ctx.query.limit || 20,
           "cursor":~~ctx.query.cursor,
       }
       ctx.query.city !=='undefined' && (postData.city = ctx.query.city)
       const res = await axios.post('https://apinew.juejin.im/event_api/v1/event/event_list',postData
           ,{
           headers:{
               'Content-Type': 'application/json'
           },
       })
       const list = res.data.data.map(item => {
           return {
               ...item,
               id:item.id + ctx.query.cursor.toString()
           }
       })
       ctx.body = {
           code: 0,
           data: {
               cursor: res.data.cursor,
               list: list,
               has_more: res.data.has_more
           }
       }
   }catch (e){
       console.log('出错了！！！！！！！')
       console.log(e)
       ctx.body = {
           code: 500,
           data: {
               error:e
           }
       }
   }
})



module.exports = router