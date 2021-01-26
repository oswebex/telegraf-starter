import { MyBot } from "../declarations";
import channelController from "./channel.controller";
import privateController from "./private.controller";

export default function (bot: MyBot) {
  bot.configure(privateController)
  bot.configure(channelController)
}
