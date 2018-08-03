const Koa = require('koa');

const app = new Koa ();

// ctx是由koa传入的封装了request和response的变量
// next是koa传入的将要处理的下一个异步函数。
app.use(async (ctx, next) =>{
  await next(); // Step1.会先处理下一个异步函数，
  ctx.response.type = 'text/html';  // Step2.设置response的Content-Type:
  ctx.response.body = '<h1>Hello Koa!</h1>'; // Step3.设置response的内容:
});

app.listen(3000);
console.log('app started at port 3000...');