const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor(`#f12424`)
        .setAuthor(`Pong!`, "https://raw.githubusercontent.com/thiagowaib/osvaldo/main/src/assets/raquete.png")
        await interaction.reply({embeds: [embed]})
    },
}