import bot from "./bot"
import config from "./config"

const logger = bot.context.logger!

async function main() {
  try {
    void await bot.launch(config.launch as any)
    logger.info('The bot is working')
  } catch (err) {
    logger.error(err)
  }
}

main();

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
)
