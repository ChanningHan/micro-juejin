const port = 8076

// const publicPath = '//localhost:3000/'


export default  {
    port,
    base: '//www.channing-bbs.club:8076/',
    proxy: {
        '/api/micro-juejin-tryVite': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api\/micro-juejin-tryVite/, '/api')
        }
    }
}