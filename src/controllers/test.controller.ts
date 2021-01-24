import { MyBot } from "../declarations";
import { Markup as m } from "telegraf";

export default function(bot: MyBot) {
  bot.start(ctx => {
    const keyboard = m.keyboard([
      m.button.contactRequest('Send contact')
    ])
  
    return ctx.reply('for sign up send your contact', keyboard.resize().oneTime())
  })
  
  bot.on('contact', ctx => {
    const { contact } = ctx.message
  
    return Promise.all([
      ctx.tg.sendContact(ctx.chat!.id, 'phone_number', 'first_name', contact), // this need refactor
      ctx.reply('...', m.removeKeyboard())
    ])
  })
}
