const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageAttachment } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Traz algumas informações do servidor"),
    async execute(interaction) {

        // const attachment = new MessageAttachment("https://github.com/thiagowaib/osvaldo/blob/main/src/assets/harold1.jpg")

        await interaction.reply(`
        Estou falando diretamente do ${interaction.guild.name}! Meu 2º servidor favorito ;)\nVocês tem ${interaction.guild.memberCount} membros atualmente.
        `)
        // await interaction.followUp({files: [attachment]})

    },
}