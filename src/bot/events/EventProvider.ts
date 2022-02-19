import { Client } from 'discord.js'
import setupOnMessageCreateEvent from './MessageCreate'

export default function setupEventProvider(_client: Client) {
  setupOnMessageCreateEvent()
}
