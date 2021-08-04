module.exports= {
    name:'invite',
    description: "link to invite LuzBot to new servers",
    execute(message, args){
        message.channel.send('Use this link to add me to other servers!\n<https://top.gg/bot/765262506389405707>');
    }
}
