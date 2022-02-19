// import discord from 'discord.js'

import { Client, Intents } from 'discord.js'
import setupEventProvider from './events/EventProvider'

export default async function setupBot() {
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.DIRECT_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGES,
    ],
  })

  try {
    await client.login(process.env.DISCORD_BOT_TOKEN)
    const user = client.user
    if (!user) return null

    console.log(
      `Successfully logged in as ${user.username}#${user.discriminator}`
    )

    setupEventProvider(client)
    return client
  } catch (e) {
    return null
  }
}
