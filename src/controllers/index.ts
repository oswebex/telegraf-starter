import { MyBot } from "../declarations"
import channelController from "./channel"
import privateController from "./private"

export default function (bot: MyBot) {
  bot.configure(privateController)
  bot.configure(channelController)
}
