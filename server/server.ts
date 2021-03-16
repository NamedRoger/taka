import { Application,isHttpError,Status } from "https://deno.land/x/oak/mod.ts";
import database from './database/database.ts';
import { calssroomRouter,authRouter } from './modules/routes.ts'
import {oakCors } from 'https://deno.land/x/cors@v1.2.1/mod.ts';

  
const app = new Application();


const port = 8080;  

app.use(oakCors());
// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(calssroomRouter.routes());
app.use(calssroomRouter.allowedMethods());

app.use(authRouter.routes());
app.use(authRouter.allowedMethods());


await app.listen({ port });
