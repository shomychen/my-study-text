const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time'); // 通过response执行 'X-Response-Time'
  console.log(`请求方式：${ctx.method} 请求路径：${ctx.url} - 请求时间： ${rt}`);
});
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time',`${ms}ms`);
})
app.use(async ctx => {
  ctx.body = 'Hello Koa';
})

app.listen(3000);