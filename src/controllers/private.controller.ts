import { Composer } from "telegraf";
import { promisify } from 'util'
import { MyBot, MyContext } from "../declarations";

const delay = promisify(setTimeout)

export default function (bot: MyBot) {
  const pm = new Composer<MyContext>()

  pm.command('long', async ctx => {
    await delay(60_000)
    return ctx.reply('pm long')
  })

  pm.start(ctx => ctx.reply('pm start'))

  pm.help(ctx => ctx.reply('pm help'))

  bot.use(Composer.chatType('private', pm))
}
