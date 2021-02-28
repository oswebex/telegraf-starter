import { MyBot } from "../declarations"
import { createLogger, format, Logger, transports } from 'winston'

export default function (bot: MyBot) {
  // Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
  const logger = createLogger({
    // To see more detailed errors, change this to 'debug'
    level: 'info',
    format: format.combine(
      format.splat(),
      format.simple()
    ),
    transports: [
      new transports.Console()
    ],
  })

  bot.context.logger = logger
}

declare module '../declarations' {
  class MyContext {
    logger: Logger
  }
}
