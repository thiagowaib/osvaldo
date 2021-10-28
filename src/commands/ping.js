const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor(`#f12424`)
        .setAuthor(`Pong!`, "https://github.com/thiagowaib/osvaldo/blob/main/src/assets/raquete.png?raw=true")
        await interaction.reply({embeds: [embed]})
    },
}