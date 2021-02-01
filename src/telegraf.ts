import { Telegraf as TelegrafSource, Context } from "telegraf"
export class Telegraf<TContext extends Context> extends TelegrafSource<TContext> {
  configure(callback: (this: this, bot: this) => void): this {
    callback.call(this, this)
    return this
  }
}
