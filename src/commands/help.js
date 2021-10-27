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
        .setAuthor("Aqui está:")
        .setThumbnail("https://github.com/thiagowaib/osvaldo/blob/main/src/assets/harold0.png?raw=true")
        .addFields(
            // {name: "\u200B", value: "\u200B", inline: false},
            {name: "/user", value: "informações suas;", inline: false},
            {name: "/server", value: "informações do servidor;", inline: false},
            {name: "/ping", value: "pong!", inline: false},
            {name: "/roll", value: "joga um dado;", inline: false},
            {name: "/random", value: "???", inline: false},
        )
        .setTimestamp()
        .setFooter("Osvaldo - A solução que você nunca quis")
        await interaction.reply({embeds: [embed]})
    },
}