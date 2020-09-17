const { RichEmbed } = require('discord.js');
const Discord = require("discord.js")
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "sekce",
  category: "developer",
  description: "Pošle embed s reakcemi",
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


    const reactembed = new RichEmbed()
      .setTitle("Vyber si svou vysněnou sekci! <:Discord_Verified:754771579266924596>")
      .setColor("#0275d8")
      .addField(`<:Bug:722199787117477911> Discord`,  stripIndents`Ti otevře přístup ke všem novinkám a věcem týkajících se Discordu!`)
      .addField(`<a:PepeSmoke:725465991957577819> Developer`,  stripIndents`Ti otevře přístup do Developer kategorie!`)
      .addField(`<a:jello:725465992875999252> Meme`,  stripIndents`Ti otevře přístup do meme roomky!`)
      .addField(`<a:Pew_Pew:722189704010661918> Notice`,  stripIndents`Ti umožní se dozvědět vše nové hned jako první!`);


    message.channel.send(reactembed)
    .then(function (msg) {
        msg.react("722199787117477911");
        msg.react("725465991957577819");
        msg.react("725465992875999252");
        msg.react("722189704010661918");
        message.delete({timeout: 1000});
        }).catch(function(error) {
        console.log(error);
    });


}
}
