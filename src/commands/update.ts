import { getLeaderboard } from '../api/get_leaderboard'
import { CommandContext } from '../models/command_context'
import { Command } from './command'

export class UpdateLeaderboardCommand implements Command {
    commandNames = ['update']

    getHelpMessage(commandPrefix: string): string {
        return `Use ${commandPrefix}update to refresh the leaderboard.`
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        await parsedUserCommand.originalMessage.reply(
            getLeaderboard(parsedUserCommand),
        )
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true
    }
}
