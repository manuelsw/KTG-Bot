const discord = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message, client, interaction, args) {
        
        if (message.channel.type == "DM") return

        if (message.member.roles.cache.has("d") || message.member.roles.cache.has("idRuolo2")) return
    
        var parolacce = ["Cazzo", "Madonna", "Dio", "Stronzo", "Coglione", "Culo", "Scopare", "Negro", "Merda", "Vaffanculo", "Porco", "Deficente", "Puttana", "Sega", "Frocio", "Bastardi", "Figa", "Pompino", "Puttanate", "Trombata", "Cesso", "Culone", "Fottuto", "Rompi Palle", "Rompi coglioni", "Troia", "Frocio", "Gay", "Trans", "Lesbica", "Spastico", "Morire Soppresso", "cazzo", "madonna", "dio", "stronzo", "coglione", "culo", "scopare", "negro", "merda", "vaffanculo", "porco", "deficente", "puttana", "sega", "frocio", "bastardi", "figa", "pompino", "puttanate", "trombata", "cesso", "culone", "fottuto", "rompi palle", "rompi coglioni", "troia", "frocio", "gay", "trans", "lesbica", "spastico", "morire soppresso"]
        var trovata = false;
        var testo = message.content;
    
        parolacce.forEach(parola => {
            if (message.content.toLowerCase().includes(parola.toLowerCase())) {
                trovata = true;
                testo = testo.replace(eval(`/${parola}/g`), "###");
            }
        })

        if (trovata) {
            message.delete();
            message.author.send({
                content: "Hai scritto una parola non ammessa!"
            })
 
        }
    }
}

