import { MyContext } from "../declarations";

export default () => async function (ctx: MyContext, next: any) {
  const start = new Date()

  await next()

  const ms = +new Date() - +start

  console.info('[%s][%s/%s][%s][%sms]', start.toLocaleTimeString(), ctx.from?.id, ctx.from?.username, ctx.updateType,  ms)
}
