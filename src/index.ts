import logger from "./logger"
import bot from "./bot"

async function main() {
  try {
    if (process.env.BOT_SKIP_UPDATES) {
      void await bot.telegram.callApi('getUpdates', { offset: -1 })
      logger.info('The updates have been skipped')
    }
    void await bot.launch()
    logger.info('The bot is launched')
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
  } catch (err) {
    logger.error(err)
  }
}

main();

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
)
