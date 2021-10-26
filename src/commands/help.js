const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Link de Suporte"),
    async execute(interaction) {
        await interaction.reply("https://github.com/thiagowaib/osvaldo")
    },
}