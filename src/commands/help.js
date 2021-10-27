const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Commandos & Suporte"),
    async execute(interaction) {

        const embed = new MessageEmbed()
        .setColor("#f12424")
        .setTitle("Comandos e Suporte")
        .setURL("https://github.com/thiagowaib/osvaldo#osvaldo")
        .setAuthor("Osvaldo, o Bot")
        .setThumbnail("https://github.com/thiagowaib/osvaldo/blob/main/src/assets/harold0.png")
        .addField('\u200b', '\u200b')
        .addField("/ping","pong!")
        .addField("/user","informações suas")
        .addField("/server","informações do servidor")
        .addField("/random","???")
        .addField("/roll","joga um dado")
        .addField('\u200b', '\u200b')
        .setTimestamp()
        .setFooter("Osvaldo - A solução que você nunca quis")
        await interaction.reply({embeds: [embed]})
    },
}