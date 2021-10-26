const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageAttachment } = require("discord.js")
const fs = require("fs")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Traz algumas informações do servidor"),
    async execute(interaction) {

        const image = fs.readFileSync(__dirname.toString().replace("commands","assets\\harold1.jpg"))
        const attachment = new MessageAttachment(image)

        await interaction.reply(`
        Estou falando diretamente do ${interaction.guild.name}! Meu 2º servidor favorito ;)\nVocês tem ${interaction.guild.memberCount} membros atualmente.
        `)
        await interaction.followUp({files: [attachment]})

    },
}