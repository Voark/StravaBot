import { CommandContext } from '../models/command_context'
import { Command } from './command'

export class UpdateLeaderboardCommand implements Command {
    commandNames = ['greet', 'hello']

    getHelpMessage(commandPrefix: string): string {
        return `Use ${commandPrefix}greet to get a greeting.`
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        // Add command here
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true
    }
}
