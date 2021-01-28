import { Context } from "telegraf";
import { Telegraf } from "./telegraf";

interface IBotContext extends Context {
  state: object;
}

export type MyContext = IBotContext;
export type MyBot = Telegraf<MyContext>;