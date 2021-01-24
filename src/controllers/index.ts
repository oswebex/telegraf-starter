import { MyBot } from "../declarations";
import testController from "./test.controller";

export default function (bot: MyBot) {
  bot.configure(testController)
}
