import bot from "./bot";

bot.launch()
  .then(() => console.info('The bot is launched'))
  .catch(err => console.error(err))

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


process.on('unhandledRejection', (reason, p) => console.error('%j %j', p, reason))