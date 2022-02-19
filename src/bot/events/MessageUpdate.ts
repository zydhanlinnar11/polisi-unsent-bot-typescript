import { Client } from 'discord.js'
import resendMessage from './handler/ResendMessage'

const EVENT = 'messageUpdate'

export default function setupOnMessageUpdateEvent(_client: Client) {
  _client.on(EVENT, (oldMessage, newMessage) =>
    resendMessage(oldMessage, 'update', newMessage)
  )
}
