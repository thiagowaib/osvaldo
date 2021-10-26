require('dotenv').config()
const { Client, Intents, Collection, Interaction } = require('discord.js')
const fs = require("fs")
const { ClientRequest } = require('http')

const client = new Client({ intents: [Intents.FLAGS.GUILDS]})

client.once('ready', ()=>{
    console.log("Bot Ready!")
})

client.commands = new Collection()
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith(".js"))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    // Set a new item in the Collection
	// With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command)
}

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return null

    const command = client.commands.get(interaction.commandName)
    if(!command) return null

    try{
        await command.execute(interaction)
    }catch(err){
        console.log(err)
        await interaction.reply({content: "Aconteceu algum erro x-x", ephemeral: true})
    }

})

client.login(process.env.BOT_TOKEN)