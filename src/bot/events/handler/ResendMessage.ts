import { Message, PartialMessage, User } from 'discord.js'

export default function resendMessage(
  message: Message<boolean> | PartialMessage,
  eventType: 'delete' | 'update'
) {
  if (!message.content) return

  const prefix = eventType === 'delete' ? 'Before unsent' : 'Before edited'

  const hasEmbed = message.embeds.length > 0
  if (hasEmbed) {
    const isEmbedURLSameAsMessageContent =
      message.embeds[0].url === message.content
    if (isEmbedURLSameAsMessageContent) {
      message.channel.send(`${prefix} :`)
      message.channel.send(message.content)
      message.channel.send(
        `By : ${getSenderAndTimestamp(message.author, message.createdAt)}`
      )
      return
    }
  }

  message.channel.send(
    `${prefix} : " ${message.content} "-${getSenderAndTimestamp(
      message.author,
      message.createdAt
    )}`
  )
}

function getSenderAndTimestamp(author: User | null, createdAt: Date) {
  const createdAtLocaleString = createdAt.toLocaleString(
    process.env.BOT_LOCALE ?? 'id-ID',
    {
      timeZone: process.env.BOT_TIMEZONE ?? 'Asia/Jakarta',
      timeZoneName: 'short',
    }
  )
  return `${author ? `<@${author.id}>` : 'Someone'} at ${createdAtLocaleString}`
}
