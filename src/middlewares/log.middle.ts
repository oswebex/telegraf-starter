import { MyContext } from "../declarations"

export default () => async function (ctx: MyContext, next: any) {
  const start = new Date()
  try {
    await next()
  } catch (err) {
    throw err
  } finally {
    const ms = +new Date() - +start
    ctx.logger.info('[%s][%s/%s][%s][%sms]', start.toLocaleTimeString(), ctx.from?.id, ctx.from?.username, ctx.updateType, ms)
  }
}
