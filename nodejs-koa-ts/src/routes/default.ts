import * as Koa from "koa";
import { Context } from "koa";

import { createApp } from "../common";

async function main(ctx: Context, next: Function) {
  ctx.throw(404);
}

export default createApp((app: Koa) => {
  app.use(main);
});
