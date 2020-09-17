const { Client, RichEmbed, Collection, MessageAttachment } = require("discord.js");
const Canvas = require('canvas');
const fs = require('fs');

const client = new Client({
  disableEveryone: true, partials: ['MESSAGE', 'REACTION']
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);

});

client.on("ready", () => {
  console.log('Ready!');
  setInterval(function() {

    let statuses = [`${client.users.size} discord uživatelů!`, `www.hostnow.cz`, `Sleduj nás na našem instagramu @hostnow`];

    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setPresence({ game: {name: status}, status: "online" });

  }, 5000)
});

client.on("message", async message => {
    const prefix = ".";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    console.log(command)

    if (command)
        command.run(client, message, args);

});


fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(channel => channel.name === "logs");
	if (!channel) return;

  let welcomeembed = new RichEmbed()
       .setColor("#0275d8")
       .setThumbnail("https://upload.hicoria.com/files/Ktrb9tKK.png")
       .setDescription(`**Vítej** ${member} na oficiálním Discord serveru portálu **HostNow.cz**!\n\n Pravidla najdeš v kanále <#755833494361604127> a kdybys potřeboval s čímkoliv pomoc, stačí navštívit kanál <#755833082883342438>!`)

       channel.send(welcomeembed)

});

client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.find(channel => channel.name === "logs");
	if (!channel) return;

  let leaveembed = new RichEmbed()
       .setColor("#0275d8")
       .setThumbnail("https://upload.hicoria.com/files/smNTrndJ.png")
       .setDescription(`**Sbohem** ${member}\n\n Mrzí nás, že jsi u nás nebyl spokojen, snad se k nám zase brzy vrátíš.`)

       channel.send(leaveembed)

});

client.login("NzUzMzEzNzY5NDUwNTA0MzAy.X1kYHg.gTPKxMJgOQSPh57pg31uiGjTu50");
