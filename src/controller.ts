import { Composer, Context } from "telegraf";

export class Controller<C extends Context> extends Composer<C> {
  configure(callback: (this: this, app: this) => void): this {
    callback.call(this, this);
    return this;
  }
}