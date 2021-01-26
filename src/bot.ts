import { Telegraf } from "./telegraf"
import middlewares from "./middlewares"
import controllers from "./controllers"

const token = process.env.BOT_TOKEN!
const options = {
  telegram: {
    apiRoot: process.env.BOT_API
  },
  fetchTimeout: process.env.BOT_FETCH_TIMEOUT
}
const bot = new Telegraf(token, options)

bot.configure(middlewares)

bot.configure(controllers)

bot.catch((err, ctx) => {
  console.error(`Ooops, encountered an error for ${ctx.updateType}`, err)
})

export default bot;