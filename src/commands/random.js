const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("???"),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor(`#f12424`)
        .setTitle(`Clica aqui`)
        .setDescription("Não é vírus")
        .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        .setThumbnail("https://github.com/thiagowaib/osvaldo/blob/main/src/assets/virus.png?raw=true")
        await interaction.reply({embeds: [embed]})
    },
}