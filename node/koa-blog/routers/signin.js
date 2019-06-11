const router = require('koa-router')();

router.get('/signin' , async (ctx) => {
   await ctx.render('signin');
    // ctx.body = 'signin page';
})
module.exports = router;