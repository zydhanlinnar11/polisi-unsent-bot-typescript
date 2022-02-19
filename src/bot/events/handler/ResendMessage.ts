import { Message, PartialMessage, User } from 'discord.js'

export default function resendMessage(
  oldMessage: Message<boolean> | PartialMessage,
  eventType: 'delete' | 'update',
  newMessage?: Message<boolean> | PartialMessage
) {
  if (oldMessage.content === newMessage?.content) return
  if (!oldMessage.content) return

  const prefix = eventType === 'delete' ? 'Before unsent' : 'Before edited'

  const hasEmbed = oldMessage.embeds.length > 0
  if (hasEmbed) {
    const isEmbedURLSameAsMessageContent =
      oldMessage.embeds[0].url === oldMessage.content
    if (isEmbedURLSameAsMessageContent) {
      oldMessage.channel.send(`${prefix} :`)
      oldMessage.channel.send(oldMessage.content)
      oldMessage.channel.send(
        `By : ${getSenderAndTimestamp(oldMessage.author, oldMessage.createdAt)}`
      )
      return
    }
  }

  oldMessage.channel.send(
    `${prefix} : " ${oldMessage.content} "-${getSenderAndTimestamp(
      oldMessage.author,
      oldMessage.createdAt
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
