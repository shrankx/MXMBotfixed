const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');
const youtube = require('./commands/youtube');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Codelyon is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args); 

    }if (command === 'clear'){

        client.commands.get('clear').execute(message, args); 
    }else if (command === 'kick'){
        
     client.commands.get('kick').execute(message, args); 

    }if (command === 'ban'){
        client.commands.get('ban').execute(message, args); 
    }else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }


});

client.login('NzgyOTA4MDYyODgwNjI4NzY3.X8TB8w.SJqDp10DizYERXUY7SDSak--SLE');