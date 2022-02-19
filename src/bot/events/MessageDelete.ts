import { Client } from 'discord.js'
import resendMessage from './handler/ResendMessage'

const EVENT = 'messageDelete'

export default function setupOnMessageDeleteEvent(_client: Client) {
  _client.on(EVENT, (message) => resendMessage(message, 'delete'))
}
