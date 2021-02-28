const { env } = process

const isProd = env.NODE_ENV === 'production'

export default {
  token: env.BOT_TOKEN!,
  telegraf: {
    telegram: {
      apiRoot: env.BOT_API!
    }
  },
  launch: {
    dropPendingUpdates: env.BOT_SKIP_UPDATES!,
    webhook: isProd ? {
      domain: env.DOMAIN!,
      port: +env.PORT!,
      hookPath: env.BOT_HOOKPATH!
    } : undefined,
  }
}
