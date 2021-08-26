import { Message } from 'discord.js'
import { getLeaderboard } from '../../src/api/get_leaderboard'
import { UpdateLeaderboardCommand } from '../../src/commands/update'
import { CommandContext } from '../../src/models/command_context'
import { buildMockMessage } from '../build_mock_message'

jest.mock('../../src/api/get_leaderboard')

const mockgetLeaderboard = getLeaderboard as jest.MockedFunction<
    typeof getLeaderboard
>
mockgetLeaderboard.mockReturnValue('testing 123')

describe('UpdateLeaderboardCommand', () => {
    let command: UpdateLeaderboardCommand
    let message: Message
    let commandContext: CommandContext

    beforeEach(() => {
        command = new UpdateLeaderboardCommand()
        message = buildMockMessage('!update')
        commandContext = new CommandContext(message, '!')
        jest.clearAllMocks()
    })

    it('should give the right help message', () => {
        expect(command.getHelpMessage('!')).toEqual(
            'Use !update to refresh the leaderboard.',
        )
    })

    it('should give everyone permission to run', async () => {
        expect(command.hasPermissionToRun(commandContext)).toEqual(true)
    })

    it("should say 'testing 123'", async () => {
        command.run(commandContext)
        expect(message.reply).toHaveBeenCalledWith('testing 123')
        expect(mockgetLeaderboard).toHaveBeenCalledTimes(1)
    })
})
