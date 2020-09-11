const router = require('koa-router')({ prefix: '/api' })

const people = require('./people')
const home = require('./home')


router.get('/', async ctx => { ctx.body = 'api index' })

router.use('/people', people.routes());
router.use('/home', home.routes());

module.exports = router