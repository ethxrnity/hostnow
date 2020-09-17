const { RichEmbed } = require('discord.js');
const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true});
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "say",
  category: "moderation",
  description: "Tvá zpráva bude napsána za bota",
  run: async (client, message, args) => {
           const member = getMember(message, args.join(" "));
           const msg = await message.channel.send({embed: {
  color: 161240,
  description: "<a:Check_Mark:752113266603327579> Požadavek byl úspěšně odeslán...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}}).then(m => m.delete(1999));

    if(message.guild.id !== "683622171410694145") return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Promiň, ale bota nemůžeš použít na žádném jiném serveru, než je ten náš!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
  
}});
    

if(!member.roles.has('683623714658582559')) return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}})
    
  if(args[0].toLowerCase() === "embed") {
  if(message.content.includes("|")) {
    var title = message.content.split("|")[0]
    title = title.replace(".say embed","");
    var text = message.content.split("|")[1]

    var sayembed = new RichEmbed()
      .setTitle(title)
      .setColor("#0275d8")
      .setDescription(text);

    const esayMessage = args.slice(1).join(" ");
    message.delete().catch(O_o=>{});

    
    message.channel.send(sayembed)
    } else {
        return;
    }
  } else {
    message.channel.send(args.join(" "))
  }
}
}