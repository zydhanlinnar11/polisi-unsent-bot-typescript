import { Client } from 'discord.js'
import setupOnMessageCreateEvent from './MessageCreate'
import setupOnMessageDeleteEvent from './MessageDelete'
import setupOnMessageUpdateEvent from './MessageUpdate'

export default function setupEventProvider(_client: Client) {
  setupOnMessageCreateEvent(_client)
  setupOnMessageDeleteEvent(_client)
  setupOnMessageUpdateEvent(_client)
}
