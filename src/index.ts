import bot from "./bot";

(async function() {
  try {
    if (process.env.BOT_SKIP_UPDATES) {
      void await bot.telegram.callApi('getUpdates', { offset: -1 })
    }
    void await bot.launch()
    console.info('The bot is launched')
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
  } catch (err) {
    console.error(err)
  }
}())

process.on('unhandledRejection', (reason, p) => console.error('%j %j', p, reason))
