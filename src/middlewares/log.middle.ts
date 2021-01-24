import { MyContext } from "../declarations";

export default () => async function (ctx: MyContext, next: any) {
  const start = +new Date();

  await next();

  const ms = +new Date() - start;

  console.log('%sms', ms);
}
