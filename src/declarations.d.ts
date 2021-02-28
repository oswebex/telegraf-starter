import { Context } from "telegraf"
import { Telegraf } from "./telegraf"
export interface MyContext extends Context {
  state: object
}
export type MyBot = Telegraf<MyContext>
