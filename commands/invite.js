module.exports= {
    name:'invite',
    description: "link to invite LuzBot to new servers",
    execute(message, args){
        message.channel.send('Use this link to add me to other servers!\n<https://discord.com/api/oauth2/authorize?client_id=765262506389405707&permissions=384064&scope=bot>');
    }
}