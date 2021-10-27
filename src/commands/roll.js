const { SlashCommandBuilder } = require("@discordjs/builders")

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

            await interaction.reply(`
            _{1 → ${end}}_\nO dado rolou... **${result}**!
            `)
        }else{
            await interaction.reply({content: "Especifique um tamanho válido para jogar o dado: _/roll 20_ por exemplo", ephemeral: true})
        }
    },
}