const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Commandos & Suporte"),
    async execute(interaction) {
        await interaction.reply("**Comandos atuais:**\n```\n/ping\n/user\n/server\n/random\n/roll\n```zn*Para mais informações acesse: https://github.com/thiagowaib/osvaldo*")
    },
}