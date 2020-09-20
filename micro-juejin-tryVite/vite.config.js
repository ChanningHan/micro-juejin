const port = 8076

const publicPath = '//localhost:3000/'


export default  {
    port,
    base: publicPath,
    proxy: {
        // '/api': {
        //     target: 'http://localhost:3000',
        //     changeOrigin: true,
        // },
        '/api/micro-juejin-tryVite': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api\/micro-juejin-tryVite/, '/api')
        }
    }
}