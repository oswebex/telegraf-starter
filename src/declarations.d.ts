import { Context } from "telegraf";
import { Telegraf } from "./telegraf";

interface IBotContext {
  state: object;
}

export type MyContext = Context & IBotContext;
export type MyBot = Telegraf<MyContext>;
