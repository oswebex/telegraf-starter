import { Telegraf as TelegrafSource, Context } from "telegraf";
import { promisify } from 'util'

const delay = promisify(setTimeout)
// @ts-expect-error
export class Telegraf<TContext extends Context> extends TelegrafSource<TContext> {
  configure(callback: (this: this, app: this) => void): this {
    callback.call(this, this);
    return this;
  }
  
  handleUpdates(updates: any) {
    // @ts-expect-error
    if (this.options.fetchTimeout) {
      // @ts-expect-error
      return Promise.race([super.handleUpdates(updates), delay(this.options.fetchTimeout)])
    }
    // @ts-expect-error
    return super.handleUpdates(updates)
  }
}