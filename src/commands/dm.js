const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("dm")
    .setDescription("Mande uma mensagem a alguém no DM")
    .addStringOption((option)=>
        option.setName("id").setDescription("ID do contato").setRequired(true)
    )
    .addStringOption((option)=>
        option.setName("content").setDescription("Conteúdo da Mensagem").setRequired(true)
    ),
    async execute(interaction) {
        const targetID = (interaction.options.getString("id"))
        const payload = (interaction.options.getString("content"))

        if(targetID){
            if(payload){
                

                const embed = new MessageEmbed()
                .setColor("#f12424")
                .setAuthor(`${interaction.user.tag} enviou...`, `${interaction.user.avatarURL()}`)
                .setDescription(`${payload}`)
                .setFooter(`Mensagem enviada de: ${interaction.guild.name}`)
                .setTimestamp()
                try{
                    const user = await interaction.client.users.fetch(`${targetID}`)
                    if(!user.bot){
                        await user.send({embeds: [embed], tts: true})
                        await interaction.reply({content: "Mensagem enviada ;)", ephemeral: true})
                    }else{
                        await interaction.reply({content: "Desculpa, mas eu não converso com outros bots >:(", ephemeral: true})
                    }
                }catch(err){
                    console.log(err);
                    await interaction.reply({content: "A mensagem não pode ser enviada a esse ID  x-x", ephemeral: true})
                }
            }else{
                await interaction.reply({content: "Faltou digitar o conteúdo da mensagem após o ID", ephemeral: true})
            }
            
        }else{
            await interaction.reply({content: "Especifique o ID do contato que receberá a mensagem\nExemplo de ID: 275813801792634880", ephemeral: true})
        }
    },
}