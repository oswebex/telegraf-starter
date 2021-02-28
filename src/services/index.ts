import { MyBot } from "../declarations"
import logger from "./logger"

export default function (bot: MyBot) {
  bot.configure(logger)
}
