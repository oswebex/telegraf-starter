import { MyBot } from "../declarations"
import channelController from "./channel"
import commonController from "./common"
import privateController from "./private"

export default function (bot: MyBot) {
  bot.configure(commonController)
  bot.configure(privateController)
  bot.configure(channelController)
}
