import { Message, PartialMessage } from 'discord.js'

export default function resendMessage(
  message: Message<boolean> | PartialMessage,
  eventType: 'delete' | 'update'
) {
  if (!message.content) return

  const createdAtLocaleString = message.createdAt.toLocaleString(
    process.env.BOT_LOCALE ?? 'id-ID',
    {
      timeZone: process.env.BOT_TIMEZONE ?? 'Asia/Jakarta',
      timeZoneName: 'short',
    }
  )
  const prefix = eventType === 'delete' ? 'Before unsent' : 'Before edited'
  message.channel.send(
    `${prefix} : " ${message.content} "-${
      message.author ? `<@${message.author.id}>` : 'Someone'
    } ${createdAtLocaleString}`
  )
}
