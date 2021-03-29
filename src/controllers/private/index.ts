import { Controller } from "../../controller"
import { MyBot, MyContext } from "../../declarations"

export default function (bot: MyBot) {
  const pm = new Controller<MyContext>()

  pm.start(ctx => ctx.reply('pm start'))

  pm.help(ctx => ctx.reply('pm help'))

  bot.use(Controller.chatType('private', pm, () => Promise.resolve()))
}
