const { RichEmbed } = require('discord.js');
const Discord = require("discord.js")
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "osobni",
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
      .setTitle("Neboj se a vyber si roli, která tě bude charakteristikovat <a:Thinking:754780601785253940>")
      .setColor("#0275d8")
      .addField(`<:male:756247229957668875> Muž`,  stripIndents`Pravý muž si vždy potrpí na dokonalosti.`)
      .addField(`<:female:756247230788141117> Žena`,  stripIndents`Když nějak, tak pořádně. Nebo se pletu dámy?`)
      .addField(`:flag_cz: Čech`,  stripIndents`Dostaneš roli pravého hrdého Čecha!`)
      .addField(`:flag_sk: Slovák`,  stripIndents`Dostaneš roli pravého hrdého Slováka!`);


    message.channel.send(reactembed)
    .then(function (msg) {
        msg.react("756247229957668875");
        msg.react("756247230788141117");
        msg.react("🇨🇿");
        msg.react("🇸🇰");
        message.delete({timeout: 1000});
        }).catch(function(error) {
        console.log(error);
    });


}
}
