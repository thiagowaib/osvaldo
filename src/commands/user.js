const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageAttachment } = require("discord.js")
const fs = require("fs")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Traz você, para você...   O_o"),
    async execute(interaction) {

        // const attachment = new MessageAttachment(
        //     "https://giant.gfycat.com/BoldFlickeringAmericanshorthair.mp4"
        // )
        const daySinceCreate = Math.floor((new Date().getTime() - interaction.user.createdAt.getTime())/(1000*60*60*24))

        await interaction.reply(`
        Alô alô alô ${interaction.user}! Ou melhor conhecido como:\nMr. ${
            interaction.user.id
        } (para a audiência robô xD)\n\nFazem... ${
            daySinceCreate
        } dias que você criou essa conta${daySinceCreate>365?", quanta coisa!":"."}
        `)
        // if(daySinceCreate>365){
        //     await interaction.followUp({files: [attachment]})
        // }
    },
}