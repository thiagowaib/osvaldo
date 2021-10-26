const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help"),
    async execute(interaction) {
        await interaction.reply("https://github.com/thiagowaib/osvaldo")
    },
}