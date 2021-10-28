const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Traz algumas informações do servidor"),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor("#f12424")
        .setTitle(`${interaction.guild.name}\n`)
        .setThumbnail(interaction.guild.iconURL())
        .addFields(
            // {name: "\u200B", value: "\u200B", inline: false},
            {name: `${interaction.guild.memberCount - 1}`, value: "Membros", inline: true},
            {name: `Meu 2º`, value: "Servidor Favorito", inline: true},
        )
        .setTimestamp()
        await interaction.reply({embeds: [embed]})
    },
}