import * as Koa from "koa";
import { Context } from "koa";

import { createApp } from "../common";

async function main(ctx: Context, next: Function) {
  if (ctx.method !== "POST") ctx.throw(405);

  ctx.status = 200;
  ctx.body = {
    route: "second",
    body: ctx.request.body
  };
}

export default createApp((app: Koa) => {
  app.use(main);
});
