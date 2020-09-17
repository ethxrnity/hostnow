module.exports = async (client, messageReaction, user) => {

const message = messageReaction.message;
const member = message.guild.members.get(user.id);
if (member.user.bot) return;

const reactionChannel = message.guild.channels.find(channel => channel.name === "self-role");

const meme = message.guild.roles.get("755888693834809444");
const discord = message.guild.roles.get("755888728920162354");
const developer = message.guild.roles.get("756198915975544924");
const notice = message.guild.roles.get("756199073526317147");


const muz = message.guild.roles.get("756244104047886507");
const zena = message.guild.roles.get("756244199942389780");
const cech = message.guild.roles.get("756244241319198782");
const slovak = message.guild.roles.get("756244281093521458");





 if (messageReaction.emoji.id === '722199787117477911' && message.channel.id === reactionChannel .id) {
        member.addRole(discord).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

 if (messageReaction.emoji.id === '725465992875999252' && message.channel.id === reactionChannel .id) {
        member.addRole(meme).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

 if (messageReaction.emoji.id === '722189704010661918' && message.channel.id === reactionChannel .id) {
        member.addRole(notice).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

  if (messageReaction.emoji.id === '725465991957577819' && message.channel.id === reactionChannel .id) {
        member.addRole(developer).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

// Zde končí role pro sekce

 if (messageReaction.emoji.id === '756247229957668875' && message.channel.id === reactionChannel .id) {
        member.addRole(muz).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

 if (messageReaction.emoji.id === '756247230788141117' && message.channel.id === reactionChannel .id) {
        member.addRole(zena).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

 if (messageReaction.emoji.name === '🇨🇿' && message.channel.id === reactionChannel .id) {
        member.addRole(cech).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }

  if (messageReaction.emoji.name === '🇸🇰' && message.channel.id === reactionChannel .id) {
        member.addRole(slovak).catch(console.error);
        return messageReaction.remove(member).catch(console.error);
    }


}
