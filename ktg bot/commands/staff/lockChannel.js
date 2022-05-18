const ds = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu } = require("discord.js");
const config  = require("../../config.json");

module.exports = {
    name: "lock",
    Staff: true,
    async execute(interaction) {
        const role = config.utente;
        const staff = config.staff;

        const blocca = new MessageEmbed()
            .setColor('RED')
            .setTitle('CHAT lOCK')
            .setDescription('Se desideri bloccare la chat clicca sul pulsante qui sotto per bloccarla!')
            .setFooter({
                text: 'StoraxMC | Management Team'
            })

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('lock')
                    .setLabel('Blocca')
                    .setStyle('DANGER')
            )
            .addComponents(
                new MessageButton()
                .setCustomId('unlock')
                .setLabel("Sblocca")
                .setStyle("SUCCESS")
                .setDisabled()
            )

        interaction.reply({
            embeds: [blocca],
            components: [row],
            ephemeral: true
        })
        const collector = interaction.channel.createMessageComponentCollector()

        collector.on('collect', async i => {
            if (i.customId === "lock") {
            interaction.channel.edit({
                permissionOverwrites: [
                  {
                    id: config.staff,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                  },
                  {
                    id: config.utente,
                    deny: ['SEND_MESSAGES'],
                  },
                ],
            })
        }
        })
    }
}