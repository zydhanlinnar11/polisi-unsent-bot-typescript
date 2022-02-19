// Use process.env
import dotenv from 'dotenv'
import setupBot from './bot'
import setupServer from './server/app'
dotenv.config()

async function initialize() {
  const discordBotClient = await setupBot()

  setupServer(discordBotClient)
}

initialize()
