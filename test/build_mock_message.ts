import { Message } from 'discord.js'
import { mock } from 'ts-mockito'

export const buildMockMessage = (content: string): Message => {
    const message = mock(Message)
    message.reply = jest.fn()
    message.react = jest.fn()
    message.content = content
    return message
}
