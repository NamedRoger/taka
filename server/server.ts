import { Application } from "https://deno.land/x/oak/mod.ts";
import { calssroomRouter,authRouter,adminRouter } from './modules/routes.ts'
import { oakCors } from 'https://deno.land/x/cors@v1.2.1/mod.ts';
import {userMiddleware} from './middlewares/mod.ts';


const app = new Application();


const port = 8080;  

app.use(oakCors());

app.use(userMiddleware);

//Listen 
app.addEventListener("listen",(e) => {
  console.log(`The taka server is runnign in port:${port}`);
});

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

app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.use(calssroomRouter.routes());
app.use(calssroomRouter.allowedMethods());

app.use(adminRouter.routes());
app.use(adminRouter.allowedMethods());


await app.listen({ port });
