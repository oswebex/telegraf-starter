import { Controller } from "../../controller"
import { MyBot, MyContext } from "../../declarations"

export default function (bot: MyBot) {
  const common = new Controller<MyContext>()

  common.help(ctx => ctx.reply('common help'))

  bot.use(common)
}
