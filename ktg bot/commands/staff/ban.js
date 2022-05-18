const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    permission: "BAN_MEMBERS",
    async execute(message, args, members) {
        if (message.content.startsWith("!ban")) {
            var utenteBan = message.mentions.members.first();
            const logs = message.guild.channels.cache.get("965251316228182056");
    
            if (!message.member.hasPermission("BAN_MEMBERS")) {
                message.channel.send('Non hai il permesso');
                return;
            }
    
            if (!utenteBan) {
                message.channel.send('Non hai menzionato nessun utente');
                return;
            }
    
            if (!utenteBan.kickable) {
                message.channel.send('Io non ho il permesso');
                return
            }
    
            utenteBan.ban()
                .then(() => message.channel.send("<@" + utenteBan + ">" + " è stato bannato"))
            

            const embed = new MessageEmbed()
                .setTitle('Ban')
                .setColor('RED')
                .addField('Utente Bannato:', "<@" + utenteBan + ">", false)
                .addField('Id Utente:', utenteBan.id, false)
                .addField('Staffer:', "<@" + message.author.id + ">", false)
                .addField('Id Staffer:', message.author.id, false)
                .setFooter({
                    text: 'KTG - Official Bot'
            })
                .setTimestamp()
            logs.send({embeds: [embed] })
        }
    }
}