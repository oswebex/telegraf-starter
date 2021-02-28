import { promisify } from "util"
import bot from "../bot"

const delay = promisify(setTimeout)

export default async function main() {
  const { telegram:tg } = bot
  const list: any = Array(100).fill(0)

  let i = 0
  for (const { clientId } of list) {
    await tg.sendMessage(clientId, '...')

    if (++i % 30 === 0) {
      await delay(10000)
    }
  }
}
