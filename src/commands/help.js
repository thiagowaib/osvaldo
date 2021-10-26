const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Link de Suporte"),
    async execute(interaction) {
        await interaction.reply("Comandos atuais:\n---------------\n/ping\n/user\n/server\n/random\n---------------\nPara mais informações acesse: https://github.com/thiagowaib/osvaldo")
    },
}