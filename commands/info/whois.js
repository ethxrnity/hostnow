const { getMember, formatDate } = require("../../functions.js");
const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "whois",
  aliases: ["userinfo", "user", "who"],
  category: "info",
  description: "Returns user information",
  usage: "[username | id | mention]",
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
  description: `<a:Denied_Mark:752129489617682552> Promiň, ale tento příkaz lze použít pouze v kanále ${message.guild.channels.get('745252113357078566')}`,
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
  
}});

const joined = formatDate(member.joinedAt);
const roles = member.roles
    .filter(r => r.id !== message.guild.id)
    .map(r => r)
    .join(", ") || "none";

const created = formatDate(member.user.createdAt);

const userembed = new RichEmbed()
    .setFooter("Request from: " + message.author.username, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor("#576bff")

    .addField(`Member information`, stripIndents`**Display name:** ${member.displayName}
    **Joined at:** ${joined}
    **Roles:** ${roles}`, true)

    .addField(`User information`, stripIndents`**ID:** ${member.user.id}
    **Username:** ${member.user.username}
    **Discord Tag:** ${member.user.tag}
    **Created at:** ${created}`, true)

    .setTimestamp()

if (member.user.presence.game)
   userembed.addField(`Currently playing`, `**Name:** ${member.user.presence.game.name}`);

message.channel.send(userembed);
  }
}
