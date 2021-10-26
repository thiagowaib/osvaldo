const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageAttachment } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Traz algumas informações do servidor"),
    async execute(interaction) {
        
        const attachment = new MessageAttachment(
            "https://github.com/thiagowaib/osvaldo/blob/main/src/assets/harold1.jpg"
        )
        console.log(attachment)
        await interaction.reply(`
        Estou Falando Diretamente do ${interaction.guild.name}! Meu 2º servidor favorito ;)\nVocês tem ${interaction.guild.memberCount} membros atualmente.
        `, attachment)

    },
}