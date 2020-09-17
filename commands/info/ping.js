const { RichEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    category: "info",
    description: "Odešle botův ping",
    run: async (client, message, args) => {
       const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:Check_Mark:752113266603327579> Požadavek byl úspěšně odeslán...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}}).then(m => m.delete(1999));

   let pingcommand = new RichEmbed()
       .setColor("#0275d8")
       .setDescription(`:ping_pong: Pong! **\`${client.pings[0]}ms\`**`)
       .setFooter("Požadavek od: " + message.author.username, message.author.avatarURL)
       .setTimestamp()

       message.channel.send(pingcommand)


}
    }
