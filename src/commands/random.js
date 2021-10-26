const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("???"),
    async execute(interaction) {
        const adjectives = [
            "sensual", "bonito", "gordão", "sábio", "estranho", "maravilhoso", "popular", "engrenagem"
        ]
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
        await interaction.reply(`
        O ${interaction.user} é muito ${adjective}
        `)
    },
}