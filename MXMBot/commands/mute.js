
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Customers');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}