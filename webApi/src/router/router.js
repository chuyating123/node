const Router = require('koa-router');

const router = new Router({prefix:'/users'});

router.get('/', (ctx, next) => {
    ctx.body='hello router'
})

module.exports = router;