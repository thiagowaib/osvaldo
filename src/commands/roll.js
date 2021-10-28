const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Joga um dado")
    .addStringOption((option)=>
        option.setName("type").setDescription("Tipo do Roll")
    ),
    async execute(interaction) {
        const end = parseInt(interaction.options.getString("type"))

        if(end && end>=1){
            const result = Math.floor(Math.random() * (end) + 1)

            const embed = new MessageEmbed()
            .setColor("#f12424")
            .setAuthor(`O dado rolou...`, "https://github.com/thiagowaib/osvaldo/blob/main/src/assets/dado.png?raw=true")
            .addFields(
                // {name: "\u200B", value: "\u200B", inline: false},
                {name: `    ${result}`, value: ``, inline: true},
            )
            await interaction.reply({embeds: [embed]})
        }else{
            await interaction.reply({content: "Especifique um tamanho válido para jogar o dado: _/roll 20_ por exemplo", ephemeral: true})
        }
    },
}