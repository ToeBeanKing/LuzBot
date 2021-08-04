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
    
    if(message.content.toString() === 'i notice how she looks at me')
    message.channel.send("But I pretend that I don't see");
    else if (message.content.toString() === "it's easier if i let the tension subside")
    message.channel.send("I've seen it in the books I read");
    else if (message.content.toString() === "a magic that you cannot see")
    message.channel.send("There's no limitations")
    else if (message.content.toString() === 'they wear it with pride')
    message.channel.send("But the characters I read")
    else if (message.content.toString() === 'never act or look like me')
    message.channel.send("I can't depend on them to lead me throught the right door")
    else if (message.content.toString() === "and what's the point of falling")
    message.channel.send("When I know I'm only stalling?")
    else if (message.content.toString() === 'cause i have to go back home')
    message.channel.send("Where I'm just one in the herd")
    else if (message.content.toString() === "tripping over my words")
    message.channel.send('Trying hard to go with the grain')
    else if (message.content.toString() === 'keeping the quirks in my brain')
    message.channel.send("I'm on the brink of discovery, I think")
    else if (message.content.toString() === "but what if i'm dreaming")
    message.channel.send("That's what it seems like")
    else if (message.content.toString() === "cause this girl thinks i'm part of her world")
    message.channel.send("And that new territory's scary")
    else if (message.content.toString() === 'if i turn the handle')
    message.channel.send('Am I asking for a scandal?')
    else if (message.content.toString() === "should i try to be ordinary")
    message.channel.send('mmBAAAAAAAH!')
    else if (message.content.toString() === "i've always been a little odd")
    message.channel.send('The only pea inside the pod')
    else if (message.content.toString() === "that's not an expression")
    message.channel.send("I'm guessin")
    else if (message.content.toString() === 'oh well')
    message.channel.send("See? that's exactly what I mean!")
    else if (message.content.toString() === "i'm just as awkward as i seem")
    message.channel.send("Plus, she makes nervous")
    else if (message.content.toString() === "i hope she can't tell")
    message.channel.send('What is it she sees, in this cluster clump of me?')
    else if (message.content.toString() === "or could it maybe be i'm going crazy")
    message.channel.send('And hey! Who am I kidding?')
    else if (message.content.toString() === "this isn't some sweet beginning")
    message.channel.send('Just a detour to the end!')
    else if (message.content.toString() === 'then back to the herd')
    message.channel.send('Tripping over my words')
    else if (message.content.toString() === 'trying hard to go with the grain')
    message.channel.send('Keeping the quirks in my brain')
    else if (message.content.toString() === "i'm on the brink of discovery, i think")
    message.channel.send("But what if I'm dreaming?")
    else if (message.content.toString() === "do i rewind?")
    message.channel.send("Induce amnesia?")
    else if (message.content.toString() === "pretend i didn't see her")
    message.channel.send("Succumb to stupid fear?")
    else if (message.content.toString() === "or just believe in my heart")
    message.channel.send("Why play a part?")
    else if (message.content.toString() === "why follow the herd")
    message.channel.send("Why not trust in my words?")
    else if (message.content.toString() === "don't wanna go with the grain")
    message.channel.send('Why try to make myself plain?')
    else if (message.content.toString() === "i'm on the brink of rediscovery, i think")
    message.channel.send("So what if I'm dreaming? I like the scene that I'm in!")
    else if (message.content.toString() === "and this girl is a part of this world")
    message.channel.send("The thought of being normal's far more scary")
    else if (message.content.toString() === "i'll be brave and i'll be kind")
    message.channel.send("I'll make a choice and change my mind")
    else if (message.content.toString() === "i will mess up all the time")
    message.channel.send("They'll say I'm weird")
    else if (message.content.toString() === "but i'll be fine")
    message.channel.send("I'll be anything but ordinary!")
    if(message.content.toString() === "I'm fine! Haha! Who's Amity?")
    message.channel.send("aaaand scoop!");
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
     if(message.content.includes("That's an... odd question, but the answer is... yes."))
            message.channel.send(":eyes:");
    if(message.content.includes("I'm assuming you're asking how Grom night was? It was a lot better than I expected it to go. It was... nice."))
            message.channel.send("Oh! Speaking of Grom night, who *did* you want to ask out?");
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