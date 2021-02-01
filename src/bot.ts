import { MyBot, MyContext } from "./declarations"
import { Telegraf } from "./telegraf"
import logger from "./logger"
import middlewares from "./middlewares"
import controllers from "./controllers"

const token = process.env.BOT_TOKEN!
const options = {
  telegram: {
    apiRoot: process.env.BOT_API
  }
}
const bot: MyBot = new Telegraf(token, options)
bot.context.logger = logger

bot.configure(middlewares)

bot.configure(controllers)

bot.catch((err: unknown, ctx: MyContext) => {
  ctx.logger.error(`Ooops, encountered an error for ${ctx.updateType}`, err)
})

export default bot
