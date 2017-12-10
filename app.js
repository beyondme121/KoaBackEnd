const Koa = require('koa')
const Router = require('koa-router')

const user = require('./routes/user.js')
const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
} )

router.use('/auth', user.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=> {
    console.log('server is listening at port 3000')
})
