import { MyBot, MyContext } from "./declarations"
import { Telegraf } from "./telegraf"
import config from "./config"
import services from "./services"
import middlewares from "./middlewares"
import controllers from "./controllers"

const bot: MyBot = new Telegraf(config.token, config.telegraf)

bot.configure(services)

bot.configure(middlewares)

bot.configure(controllers)

bot.catch((err: unknown, ctx: MyContext) => {
  ctx.logger.error(`Ooops, encountered an error for ${ctx.updateType}`, err)
})

export default bot
