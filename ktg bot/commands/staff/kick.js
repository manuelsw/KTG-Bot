const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.expors = {
    name: "kick",
    Staff: true,
    async execute(message, members, args) {
        if (message.content.startsWith("!kick")) {
            const logs = message.guild.channels.cache.get("965251316228182056");
            var utenteKick = message.mentions.members.first();

            if (!message.member.hasPermission("KICK_MEMBERS")) {
                message.channel.send('Non hai il permesso');
                return;
            }

            if (!utenteKick) {
                message.channel.send('Non hai menzionato nessun utente');
                return;
            }

            if (!message.mentions.members.first().kickable) {
                message.channel.send('Io non ho il permesso');
                return
            }

            utenteKick.kick()
                .then(() => message.channel.send("<@" + utenteKick + ">" + " kiccato"))


            const embed = new MessageEmbed()
                .setTitle('Kick')
                .setColor('RED')
                .addField('Utente Kickato:', "<@" + utenteKick + ">", false)
                .addField('Id Utente:', utenteKick.id, false)
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