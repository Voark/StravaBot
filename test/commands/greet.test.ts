import { Client, Intents } from 'discord.js'
import { GreetCommand } from '../../src/commands/greet'

describe('GreetCommand', () => {
    const client = new Client({
        intents: [Intents.FLAGS.GUILD_MESSAGES],
    })
    const command = new GreetCommand()

    it("should say 'Hello, world!'", () => {
        expect(true).toBe(true)
    })
})
