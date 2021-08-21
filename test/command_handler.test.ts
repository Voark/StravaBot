import { CommandHandler } from '../src/command_handler'
import { buildMockMessage } from './build_mock_message'

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
