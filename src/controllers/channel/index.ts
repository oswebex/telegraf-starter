import { Controller } from "../../controller"
import { MyBot, MyContext } from "../../declarations"

export default function (bot: MyBot) {
  const channel = new Controller<MyContext>()

  channel.on('channel_post', ctx => {
    const message = ctx.channelPost!

    return ctx.reply('ch start')
  })

  channel.help(ctx => ctx.reply('ch help'))

  bot.use(Controller.chatType('channel', channel))
}
