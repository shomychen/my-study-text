var Koa = require('koa');
var app = new Koa;
// 调用app.use()的顺序决定了middleware的顺序

//  NO1.
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
  await next(); // 调用下一个middleware
})

//  NO2.
app.use(async (ctx, next) => {
  const start = new Date().getTime(); // 当前时间
  await next(); // 调用下一个middleware，先执行NO3内的代码，再执行接下来的“打印耗费时间”
  console.log('NO2');
  const ms = new Date().getTime() - start; // 耗费时间
  console.log(`Time:${ms}ms`); // 打印耗费时间
})

//  NO3.
app.use(async (ctx, next) => {
  await next();
  console.log('NO3');
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello Koa2!</h1>';
})


app.listen(3000);
console.log('app started at port 3000...');