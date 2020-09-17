const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "poll",
  aliases: ["question"],
  category: "moderation",
  description: "Vytvoří otázku v určitém kanále!",
  run: async (client, message, args) => {

const member = getMember(message, args.join(" "));

     if(message.channel.id !== "754807139670818906") return message.channel.send({embed: {
  color: 161240,
  description: `<a:Denied_Mark:752129489617682552> Promiň, ale tento příkaz lze použít pouze v kanále ${message.guild.channels.get('754807139670818906')}`,
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

let logs = message.guild.channels.find("name", "ankety");
if(!logs) return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Nebyl nalezen kanál z názvem ``ankety``!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}});

if(!member.roles.has('683623714658582559')) return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}})


if (!args[0]) return message.channel.send({embed: {
  color: 161240,
  description: "<a:Denied_Mark:752129489617682552> Nebyla uvedena otázka nebo předmět, uveď je prosím!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}})



if(message.content.includes("|")) {
    var predmet = message.content.split("|")[0]
    predmet = predmet.replace(".poll", "");
    var otazka = message.content.split("|")[1]

const pollembed = new RichEmbed()
    .setColor("#0275d8")
    .setThumbnail("")
    .addField(`**Předmět**`, stripIndents`${predmet}`)
    .addField(`**Otázka**`, stripIndents`${otazka}`)

let msg = await logs.send(pollembed)
    .then(function (msg) {
        msg.react("714074123617173546");
        msg.react("714074136053415956");
        message.delete({timeout: 1000});
        }).catch(function(error) {
        console.log(error);
    });

const pollembed2 = new RichEmbed()
    .setColor("#0275d8")
    .setDescription(`<a:Check_Mark:752113266603327579> Anketa byla úspěšně vytvořena...`)
    .setFooter("Požadavek od: " + message.author.username, message.author.avatarURL)
    .setTimestamp();

    message.channel.send(pollembed2)


}}
}
