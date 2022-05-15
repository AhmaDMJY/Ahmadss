const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = process.env.PREFIX;
const fs = require("fs");
let whaitelist = ['588012183028367388', '732756538053230612', '651095740390834176', '409822832256876545']
const memberCounter = require("./counters/member-counter");
const usersMap = new Map();
const LIMIT = 5;
const DIFF = 5000;
let TIME = 5000;
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

client.commands = new Discord.Collection();
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(`File name: ${file} loaded`)
  console.log(`description: ${command.description}`)
  console.log("------------------")
}
// function animatedNickname() {
//   const GuildID = client.guilds.cache.get("805791318164373525")
//   const me = GuildID.members.cache.get(client.user.id)
//   let name = ["! ", "! 𝑉", "! 𝑉𝑎", "! 𝑉𝑎𝑑", "! 𝑉𝑎𝑑𝑒", "! 𝑉𝑎𝑑𝑒𝑟"]

//   for (let i = 0; i < name.length; i++)
//     me.setNickname(name[i])
// };
/////////////Ready////////////////
client.on("ready", () => {
  client.user.setActivity("</𝙰𝙲𝚘𝚍𝚎>", { type: "WATCHING" });
  client.channels.cache.get("879824050086641674").join()
    .then(connection => {
      connection.voice.setSelfDeaf(true);
    });
  memberCounter(client);
  // setInterval(animatedNickname, 1000)
  setInterval(() => {
    const guild = client.guilds.cache.get('805791318164373525');
    const channel = guild.channels.cache.get("879824058445864991");
    const twoh = new Discord.MessageEmbed()
      .setColor("#FEDB00")
      .setTitle("Vader.ir")
      .setThumbnail("https://cdn.discordapp.com/attachments/864609568783597598/865308542579114024/ahmad_Vader_Logo_Watermark.png")
      .setURL("https://discord.gg/ec3yRMnWVq")
      .setDescription("حتما اینستاگراممون رو دنبال کنید که با این کار بدجور ازمون حمایت میکنید")
      .addFields(
        { name: "instagram ma", value: '\n  https://www.instagram.com/vader.ir  \n \nＡＭＤ ＪＫＲ', })
      .setImage("https://cdn.discordapp.com/attachments/864609568783597598/864630705770594344/vader.png")
      .setTimestamp()
      .setFooter("AJ 𝒃𝒐𝒕 . movafagh va pirooz bashid ");
    channel.send(twoh)
  }, 108000000)
  console.log("Vader is online!");
});
//////////////////verify//////////////////
const channel = '879824040494264381';
const Everify = '✅';
const channel2 = "879824061922951240";
const Everify2 = "📩";
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.message.channel.id == channel) {
    if (reaction.emoji.name === Everify) {
      await reaction.message.guild.members.cache.get(user.id).roles.add('879824037247868950');
    }
  }
  if (reaction.message.channel.id == channel2) {
    if (reaction.emoji.name === Everify2) {
      reaction.message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
      reaction.message.react(Everify2);
      client.commands.get("ticket").execute(user,Discord, client);
    }
  }
});
///////////////////////////////esm new/////////////////////////////////////
client.on("guildMemberUpdate", function (oldMember, newMember) {
  if (!(oldMember.roles.cache.has("879824031606538290")) && newMember.roles.cache.has("879824031606538290")) { newMember.setNickname(`!  𝑉𝑎𝑑𝑒𝑟    ${newMember.user.username}`); }
  if ((oldMember.roles.cache.has("879824031606538290")) && !newMember.roles.cache.has("879824031606538290")) { newMember.setNickname(`「𝑉𝑅」  ${newMember.user.username}`); }
});
////////////////////////////////////////ADD////////////////
client.on("guildMemberAdd", (guildMember) => {
  console.log(`${guildMember.user.username} has joined`);
  guildMember.setNickname(`「𝑉𝑅」  ${guildMember.user.username}`);
  const guild = client.guilds.cache.get('805791318164373525');
  const memberCount = guild.memberCount;
  const channel = guild.channels.cache.get("879824050086641674");
  channel.setName(`「👤」:   ${memberCount}`);
  console.log("+updating member count to " + memberCount);
  const WelcomeEmbed = new Discord.MessageEmbed()
    .setColor("#FEDB00")
    .setTitle("Vader.ir")
    .setThumbnail(guildMember.user.avatarURL())
    .setURL("https://discord.gg/ec3yRMnWVq")
    .setDescription(`<@${guildMember.user.id}> `)
    .addFields(
      { name: "𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 Vader.ir", value: '\n ↓ please read the rules ↓ \n \n<#864609557606170624>', })
    .setImage("https://cdn.discordapp.com/attachments/865320808963113022/865321040460775464/giphy.gif")
    .setTimestamp()
    .setFooter("Vader 𝒃𝒐𝒕 . movafagh va pirooz bashid ");
  guildMember.guild.channels.cache.get("864609548882673704").send(WelcomeEmbed);
});
///////////////////////////////////adnti ban
client.on('guildBanAdd', async (guild, user) => {
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: 'MEMBER_BAN_ADD',
  });
  const guild2 = client.guilds.cache.get('805791318164373525');
  const channel = guild2.channels.cache.get("879824069573353563");
  const GuildID = client.guilds.cache.get("805791318164373525")
  const banLog = fetchedLogs.entries.first();
  let banReason = fetchedLogs.entries.first().reason
  if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);
  const { executor, target } = banLog;
  if (target.id === user.id) {
    console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, wielded by the mighty ${executor.tag}`);
  } else {
    console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`);
  }
  let admin = 0
  for (let i = 0; i < whaitelist.length; i++) {
    if (executor.id == whaitelist[i]) {
      admin = 1
    }
  }
  if (admin == 0) {
    const bann = GuildID.members.cache.get(executor.id)
    let banReason2 = "banning member"
    bann.ban({ reason: banReason2 })
    for (let i = 0; i < whaitelist.length; i++) {
      const bann = GuildID.members.cache.get(whaitelist[i])
      bann.send(`<@${executor.id}> banned ${user} : ${banReason}`)
    }
  }
  channel.send(`<@${executor.id}> banned ${user} : ${banReason}`)
  // user.send("test")
  // channel.send(`<@${executor.id}> banned ${user} : ${banReason}`)
});
////////////////Jadid role//////////////////
client.on("guildMemberUpdate", async function (oldMember, newMember) {
  const fetchedLogs = await newMember.guild.fetchAuditLogs({
    limit: 1,
    type: 'MEMBER_ROLE_UPDATE',
  });
  const rolelog = fetchedLogs.entries.first();
  const { executor, target, changes } = rolelog;
  console.log(changes[0])
  if (oldMember.roles.cache.size != newMember.roles.cache.size) {
    const guild2 = client.guilds.cache.get('805791318164373525');
    const channel = guild2.channels.cache.get("879824069573353563");
    const roleupdate = new Discord.MessageEmbed()
      .setColor('20FF00')
      .setTitle(`𝑮𝒊𝒗𝒆 𝑹𝒐𝒍𝒆`)
      .setDescription(`${executor} role be ${target} dad`)
      .setThumbnail('https://cdn.discordapp.com/attachments/854719070937939999/869225985214664754/roleg.png')
      .addFields(
        { name: 'role :', value: `<@&${changes[0].new[0].id}>`, inline: true },
      )
      .setFooter("AJ log", "https://cdn.discordapp.com/attachments/868849530710392832/870462807429238866/vader.png", "AJ")
    if (changes[0].key == '$add') {
      channel.send(roleupdate)
    }
    if (changes[0].key == '$remove') {
      roleupdate.setTitle(`𝑪𝒂𝒕𝒄𝒉 𝑹𝒐𝒍𝒆`).setDescription(`${executor} role az ${target} gereft`).setColor('#ff0000')
        .setThumbnail('https://cdn.discordapp.com/attachments/854719070937939999/869220275160506478/images.png')
      channel.send(roleupdate)
    }
  }
  if (executor.id == "879824024639795270" || executor.id == "879824024639795270") return
  if (!(oldMember.roles.cache.has("879824022781722684")) && newMember.roles.cache.has("879824022781722684")) { newMember.roles.remove('879824022781722684') };
  if (!(oldMember.roles.cache.has("879824023817699338")) && newMember.roles.cache.has("879824023817699338")) { newMember.roles.remove('879824023817699338') };
  if (!(oldMember.roles.cache.has("879824024639795270")) && newMember.roles.cache.has("879824024639795270")) { newMember.roles.remove('879824024639795270') };
  if (!(oldMember.roles.cache.has("879824039290478642")) && newMember.roles.cache.has("879824039290478642")) { newMember.roles.remove('879824039290478642') };
  if (!(oldMember.roles.cache.has("879824039290478642")) && newMember.roles.cache.has("879824039290478642")) { newMember.roles.remove('879824039290478642') };
  if (!(oldMember.roles.cache.has("879824039290478642")) && newMember.roles.cache.has("879824039290478642")) { newMember.roles.remove('879824039290478642') };

});
///////////////////////////////////commands/////////////////////////////////////////
client.on("message", async message => {
  /////////////anti spam///////////////
  if (usersMap.has(message.author.id)) {
    const userData = usersMap.get(message.author.id);
    const { lastMessage, timer } = userData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = userData.msgCount;
    console.log(difference);

    if (difference > DIFF) {
      clearTimeout(timer);
      console.log("Cleared Timeout");
      userData.msgCount = 1;
      userData.lastMessage = message;
      userData.timer = setTimeout(() => {
        usersMap.delete(message.author.id);
        console.log("Removed from map.");
      }, TIME);
      usersMap.set(message.author.id, userData);
    } else {
      if (message.author.id == "805791318164373525") return;
      ++msgCount;
      if (parseInt(msgCount) === LIMIT) {
        message.member.roles.add("879824025768034335");
        message.channel.bulkDelete(LIMIT);
        userData.msgCount = 0;
        const guild2 = client.guilds.cache.get("805791318164373525");
        const log = guild2.channels.cache.get("879824069573353563");
        message.reply("**Warning**: Spam nkon :)").then((msg) => {
          setTimeout(() => msg.delete(), 10000);
        });
        // log.send(`test ${message.member.roles._roles.role}`)
        const spam = [];
        let i = 0;
        await message.member.roles._roles.forEach((role) => {
          const test = role.name;
          spam[i] = test + "\n";
          i++;
        });
        spam.pop();
        message.member.roles.add("879824025768034335").catch((err) => {
          console.error(err);
        });
        var now = new Date();
        var gdate = now.getDate();
        var gmonth = now.getMonth() + 1;
        var gfullyear = now.getFullYear();
        var ghours = now.getHours();
        var gmin = now.getMinutes();
        var gsec = now.getSeconds();
        const Espam = new Discord.MessageEmbed()
          .setColor("#fffff0")
          .setTitle(`${message.member.user.tag}`)
          // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
          .setDescription(`${message.author} has been  mute **[spamming]**.`)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/712950581765079132/868881013974114454/spam3.png"
          )
          .addFields(
            { name: "spammer roles :", value: `${spam}`, inline: true },
            {
              name: "Spam channel is :",
              value: `${message.channel}`,
              inline: true,
            },
            {
              name: "Spam message count :",
              value: `${msgCount}`,
              inline: true,
            },
            {
              name: "Spam Time :",
              value: `${gfullyear}/${gmonth}/${gdate} \n ${ghours}:${gmin}:${gsec}`,
              inline: true,
            }
          )
          .setFooter(
            "AJ anti spam on top",
            "https://cdn.discordapp.com/attachments/868849530710392832/871770469995528232/5122.png",
            "Niima"
          );
        // .setFooter(`${gfullyear}/${gmonth}/${gdate} \n ${ghours}:${gmin}:${gsec}`)
        log.send(Espam);
        message.member.roles.remove(message.member.roles.cache);
        // log.send(`${message.author} has been  mute **[spamming]** in ${message.channel} .\n spammer role \n ${spam} \n **${gfullyear}/${gmonth}/${gdate}** \n **${ghours}:${gmin}:${gsec}**`)
      } else {
        userData.msgCount = msgCount;
        usersMap.set(message.author.id, userData);
      }
    }
  } else {
    let fn = setTimeout(() => {
      usersMap.delete(message.author.id);
      console.log("Removed from map.");
    }, TIME);
    usersMap.set(message.author.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn,
    });
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args, Discord);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args);
  }
  else if (command === "kick") {
    client.commands.get("kick").execute(message, args);
  }
  else if (command === "ban") {
    client.commands.get("ban").execute(message, args);
  }
  else if (command === "mute") {
    client.commands.get("mute").execute(message, args);
  } else if (command === "unmute") {
    client.commands.get("unmute").execute(message, args);
  }
  else if (command === "ann") {
    client.commands.get("ann").execute(message, args, Discord, client);
  }
  else if (command === "anns") {
    client.commands.get("anninsta").execute(message, args, Discord, client);
  }
  else if (command === "anny") {
    client.commands.get("annyoutube").execute(message, args, Discord, client);
  }
  else if (command === "warn") {
    client.commands.get("warn").execute(message, args, Discord, client);
  }
  else if (command === "verify") {
    client.commands.get("verify").execute(message, args, Discord, client);
  }
  else if (command === "clearall") {
    client.commands.get("clearall").execute(message, args, Discord, client);
  }
  else if (command === "join") {
    client.commands.get("join").execute(message, args);
  }
  else if (command === "porn") {
    client.commands.get("porn").execute(message, args, Discord, client);
  }
  else if (command === "fire") {
    client.commands.get("fire").execute(message, args, Discord, client);
  }
  else if (command === "listen") {
    if (message.member.roles.cache.has("879824024639795270")) {
      if (!args[0]) return message.reply("activity ra vared konid");
      message.channel.bulkDelete(1);
      ac = "";
      for (let i = 0; i < args.length; i++) {
        ac = ac + " " + args[i];
      }
      client.user.setActivity(ac, { type: "LISTENING" });
      message.reply("Activity has been changed to " + ac);
    } else {
      message.reply("you dont have access to this command");
    }
  } else if (command === "acreset") {
    if (message.member.roles.cache.has("879824024639795270")) {
      message.channel.bulkDelete(1);
      client.user.setActivity("sandy", { type: "WATCHING" });
      message.reply("Activity has been reset to sandy");
    } else {
      message.reply("you dont have access to this command");
    }
  }
  else if (command === "play") {
    if (message.member.roles.cache.has("879824024639795270")) {
      if (!args[0]) return message.reply("activity ra vared konid");
      message.channel.bulkDelete(1);
      ac = "";
      for (let i = 0; i < args.length; i++) {
        ac = ac + " " + args[i];
      }
      client.user.setActivity(ac, { type: "PLAYING" });
      message.reply("Activity has been changed to " + ac);
    } else {
      message.reply("you dont have access to this command");
    }
  }
  else if (command === "watch") {
    if (message.member.roles.cache.has("879824024639795270")) {
      if (!args[0]) return message.reply("activity ra vared konid");
      message.channel.bulkDelete(1);
      ac = "";
      for (let i = 0; i < args.length; i++) {
        ac = ac + " " + args[i];
      }
      client.user.setActivity(ac, { type: "WATCHING" });
      message.reply("Activity has been changed to " + ac);
    } else {
      message.reply("you dont have access to this command");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
