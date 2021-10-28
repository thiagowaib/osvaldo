const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Traz você, para você...   O_o"),
    async execute(interaction) {


        const daysSinceCreate = Math.floor((new Date().getTime() - interaction.user.createdAt.getTime())/(1000*60*60*24))


        const embed = new MessageEmbed()
        .setColor(`#${(interaction.user.hexAccentColor) ? (interaction.user.hexAccentColor).toString().replace("#","") : "f12424"}`)
        .setTitle(`${interaction.user.username}`)
        .setThumbnail(interaction.user.avatarURL())
        .addFields(
            // {name: "\u200B", value: "\u200B", inline: false},
            {name: `#${(interaction.user.tag).toString().split("#")[1]}   `, value: "Sua Tag   ", inline: true},
            {name: `${interaction.user.bot?"Sim,":"Não..."}`, value: `${interaction.user.bot?"Você é um bot":"Você não é um bot"}`, inline: true},
            {name: `${daysSinceCreate}`, value: "Dias desde seu primeiro login", inline: false},
        )
        .setTimestamp()
        await interaction.reply({embeds: [embed]})

    },
}