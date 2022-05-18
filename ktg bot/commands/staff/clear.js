const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "clear",
    Staff: true,
    async execute(message, args, user) {
        const logs = message.guild.channels.cache.get("965251316228182056");
        if (message.content.startsWith("!clear")) {

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.send('Non hai il permesso');
                return;
            }
            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                message.channel.send('Non ho il permesso');
                return;
            }
    
            var count = message.content.slice(7);
            count = parseInt(count);
    
            if (!count) {
                message.channel.send("Inserisci un numero valido")
                return
            }
    
            message.channel.bulkDelete(count, true)
            message.channel.send(`Sono stati cancellati \`${count}\` messaggi`).then(msg => {
                msg.delete({ timeout: 1000 })
            })

            const embed = new MessageEmbed()
                .setTitle('Chat Log')
                .setColor('RED')
                .setDescription(`<@${message.author.id}> ha cancellato ${count} messaggo/i in <#${message.channel.id}>`)
                .setFooter({
                    text: 'KTG - Official Bot'
                })
                .setTimestamp()
                logs.send({embeds: [embed] })
    
        }
    }
}