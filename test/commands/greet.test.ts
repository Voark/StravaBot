import { Message } from 'discord.js'
import { GreetCommand } from '../../src/commands/greet'
import { CommandContext } from '../../src/models/command_context'
import { buildMockMessage } from '../build_mock_message'

describe('GreetCommand', () => {
    let command: GreetCommand
    let message: Message
    let commandContext: CommandContext

    beforeEach(() => {
        command = new GreetCommand()
        message = buildMockMessage('!hello')
        commandContext = new CommandContext(message, '!')
        jest.clearAllMocks()
    })

    it('should give the right help message', () => {
        expect(command.getHelpMessage('!')).toEqual(
            'Use !greet to get a greeting.',
        )
    })

    it('should give everyone permission to run', async () => {
        expect(command.hasPermissionToRun(commandContext)).toEqual(true)
    })

    it("should say 'Hello, world!'", async () => {
        command.run(commandContext)
        expect(message.reply).toHaveBeenCalledWith('hello, world!')
        expect(message.reply).toHaveBeenCalledTimes(1)
    })
})
