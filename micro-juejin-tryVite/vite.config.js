const port = 8076

let devBase
devBase = '//localhost:8076/'
// console.log(import.meta.env.VITE_SOME_KEY);

console.log('process.env.SOME_MSG')
// console.log(process.env.SOME_MSG)

// export default {
//     // port,
//     // base: devBase || '//www.channing-bbs.club:8076/',
//     // proxy: {
//     //     '/api/micro-juejin-tryVite': {
//     //         target: 'http://localhost:3000',
//     //         changeOrigin: true,
//     //         rewrite: path => path.replace(/^\/api\/micro-juejin-tryVite/, '/api')
//     //     }
//     // },
//
//     configureServer:   ctx => {
//          ctx.app.use(async (ctx,next) => {
//             ctx.set('Access-Control-Allow-Origin', '*')
//              await next
//         })
//     }
//
//
// }


module.exports = ({
    port,
    base: devBase || '//www.channing-bbs.club:8076/',
    proxy: {
        '/api/micro-juejin-tryVite': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api\/micro-juejin-tryVite/, '/api')
        }
    },
    configureServer: ctx => {
        ctx.app.use(async (ctx, next) => {
            ctx.set('Access-Control-Allow-Origin', '*')
            await next()
        })
    }
})

