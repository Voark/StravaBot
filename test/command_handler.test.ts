import { Message } from 'discord.js'
import { mock } from 'ts-mockito'
import { CommandHandler } from '../src/command_handler'

const buildMockMessage = (content: string): Message => {
    const message = mock(Message)
    message.reply = jest.fn()
    message.react = jest.fn()
    message.content = content
    return message
}

describe('CommandHandler', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    const commandHandler = new CommandHandler('!')

    it('should execute a command in a message', async () => {
        const message = buildMockMessage('!hello')
        await commandHandler.handleMessage(message)
        expect(message.reply).toHaveBeenCalledWith('hello, world!')
        expect(message.reply).toHaveBeenCalledTimes(1)
    })
})
