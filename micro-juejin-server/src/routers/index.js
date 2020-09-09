const router = require('koa-router')({ prefix: '/api' })

const people = require('./people')


router.get('/', async ctx => { ctx.body = 'api index' })

router.use('/people', people.routes());

module.exports = router