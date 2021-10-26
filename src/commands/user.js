const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
    async execute(interaction) {
        await interaction.reply(`
        Your Tag: ${interaction.user.tag}\n
        Your ID: ${interaction.user.id}
        `)
    },
}