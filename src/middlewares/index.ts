import { session } from "telegraf"
import { MyBot } from "../declarations"
import logMiddle from "./log.middle"

export default function (bot: MyBot) {
  bot.use(session())
  bot.use(logMiddle())
}
