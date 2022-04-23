//1、导入Koa类
const Koa = require('koa');

const router = require('../router/router.js')
//2、实例化Koa对象
const app = new Koa();

//3、中间件 ctx记录http上下文请求
app.use(router.routes());

module.exports=app;
