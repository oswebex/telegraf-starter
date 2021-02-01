import { Context } from "telegraf";
import { Logger } from "winston";
import { Telegraf } from "./telegraf";

interface IBotContext extends Context {
  state: object
  logger: Logger
}

export type MyContext = IBotContext;
export type MyBot = Telegraf<MyContext>;