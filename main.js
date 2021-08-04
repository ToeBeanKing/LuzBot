const Discord = require ('discord.js');

const client = new Discord.Client();

const prefix = 'LuzBot ';

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('LuzBot is online!')
    client.user.setActivity("with glyphs | 'LuzBot help' for commands!", { type: 'PLAYING' }).catch(console.error);
})


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    
 
    if(message.content.includes('bicon')) 
        message.channel.send("Oh hey! I'm one of those! :D")
    if(message.content.includes('LuzBot say trans rights')) 
    message.channel.send("Trans rights!");
    if(message.content.includes('LuzBot say gay rights')) 
        message.channel.send("Gay rights!");
    if(message.content.includes('LuzBot say ace rights')) 
    message.channel.send("Ace rights!");
    if(message.content.includes('LuzBot say aro rights')) 
    message.channel.send("Aro rights!");
    if(message.content.includes('LuzBot say bi rights'))
            message.channel.send("Bi rights!");
     if(message.content.includes('LuzBot play your song'))
            message.channel.send("https://www.youtube.com/watch?v=a_aXscmzWEg");
    if(message.content.includes('LuzBot do you listen to girl in red'))
            message.channel.send("I mean... Yeah, but I prefer Sweater Weather");
    if(message.content.includes('LuzBot link me to the support server')) 
         message.channel.send("If you're having an issue or would like to suggest new commands and responses, go to https://discord.gg/a26yPYc");
    if(message.content.includes('LuzBot use a glyph'))
         message.channel.send("Well... I don't exactly think I *could* use one in text, but I'm glad to know you're interested in them!");
    if(message.content.includes('LuzBot do you like minecraft')) 
     message.channel.send("Oh, I love playing Minecraft! I've always wanted to make my own channel to show my builds and the stories I made for em, but I can just never get around to it...!");
    if(message.content.includes("LuzBot what's your favorite manga"))
     message.channel.send("Hm... I haven't really gotten *too* far into Hunter x Hunter so I don't think I can say that... Maybe Children of the Sea counts!\nTotally unrelated, did you know sometimes you get odd stares when you cry while reading manga in a library?");
    if(message.content.includes("LuzBot what's your favorite anime")) 
     message.channel.send("Your Name! Is so good! I absolutely **love** Your Name!");
    if(message.content.includes("LuzBot what are you")) 
     message.channel.send("I'm an otter! *With a dark side!*");
    if(message.content.includes('LuzBot send pride')) {
         message.channel.send(":gay_pride_flag:");
    }
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ (.*)/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'carry'){
        client.commands.get('carry').execute(message, args);
    } else if (command == 'devinfo'){
        client.commands.get('developer').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'joke'){
        client.commands.get('joke').execute(message, args);
    } else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command == 'nya'){
        message.channel.send("nya! https://media1.tenor.com/images/92ebf8b3ddb1a5602d4edf15bf6582b3/tenor.gif?itemid=18219636");
    }
});

client.login(process.env.token);
