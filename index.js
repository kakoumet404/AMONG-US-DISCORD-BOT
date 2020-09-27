const Discord = require('discord.js')

const { prefix, bot_ID } = require('./config.json');
const { token } = require('./token.json');


const client = new Discord.Client();

client.once('ready', () => {

    console.log('Ready!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' '); 
    const command = args.shift().toLowerCase(); 
    
    if (args[0].length == 6 &&  args[0].toUpperCase() === args[0] && `${message.channel}` == "<#759787196126330881>" && command ==="au") // replace "<#759787196126330881>" by the corresponding channel
    {
        message.channel.send("Code Among Us reconnu, attribution de la room au pseudo");
        let codeAU = args[0];
        message.member.setNickname(`${message.author.username} ${codeAU}`, "nick command executed");
    }
);

client.login(token);
