require('dotenv').config()
const fs = require("fs")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")

const commands = []
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith(".js"))

for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({version: '9'}).setToken(process.env.BOT_TOKEN)
rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    {body: commands}
)
.then(()=>{
    console.log("Successfully registered application commands")
})
.catch((err)=>{
    console.log(err)
})