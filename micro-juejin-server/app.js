const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const router = require('./src/routers/index')

const app = new Koa()


// 跨域中间件
app.use(cors({
    origin: ctx => {
        const localhost = new RegExp(/^(localhost)/)
        if (localhost.test(ctx.request.header.host)) {
            return '*'
        }
        //如果你想要拦截跨域可以返回false
        // return false 
        return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(bodyParser()) //post解析中间件






app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods());
/* 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配
router.routes()之后,目的在于：根据ctx.status 设置response 响应头
*/

app.listen(3000)