const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Vyhodí označeného uživatele",
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
    
     if(message.channel.id !== "754807139670818906") return message.channel.send({embed: {
  color: 161240,
  description: `<a:Denied_Mark:752129489617682552> Promiň, ale tento příkaz lze použít pouze v kanále ${message.guild.channels.get('754807139670818906')}`,
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
  
}});

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}})

let logs = message.guild.channels.find("name", "logs")
if(!logs) return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Nebyl nalezen kanál s názvem **logs**, vytvoř ho a příkaz pošli znovu!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}});

let user = message.mentions.users.first();
if(!user) return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Označ uživatele kterého chceš vyhodit a příkaz pošli znovu!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}});

let kReason = args.join(" ").slice(22);
if(!kReason) kReason = "Důvod nebyl uveden";

message.guild.member(user).kick(kReason);

let kickembed = new RichEmbed()
.setTitle("Uživatel byl vyhozen!")
.setThumbnail(member.user.displayAvatarURL)
.setColor("#0275d8")
.addField("Vyhozený uživatel:", `${user}`)
.addField("Důvod:", kReason)
.addField("Moderátor:", `${message.author}`)

const esayMessage = args.join(" ");
             message.delete().catch(O_o=>{});

logs.send(kickembed);
}
}
