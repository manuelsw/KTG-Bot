const { execute } = require("../commands/user/help");

module.exports = {
    name: "ready",
    async execute(message, client, guild, member) {
        console.clear()
        console.log('ONLINE')
        client.user.setActivity(`KTG`)    

    }
}