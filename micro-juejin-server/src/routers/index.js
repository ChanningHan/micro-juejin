const router = require('koa-router')({ prefix: '/api' })

const people = require('./people')
const home = require('./home')
const boiling = require('./boiling')
const topic = require('./topic')


router.get('/', async ctx => { ctx.body = 'api index' })

router.use('/people', people.routes());
router.use('/home', home.routes());
router.use('/boiling', boiling.routes());
router.use('/topic', topic.routes());

module.exports = router