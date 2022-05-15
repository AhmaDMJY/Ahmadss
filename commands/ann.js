module.exports = {
  name: "ann",
  description: "this command use for ann in server",
  execute(message, args, Discord,client) {
    if (message.member.roles.cache.has("879824024639795270")) {
      let matn = " ";
      const annEmbed = new Discord.MessageEmbed()
        message.channel.bulkDelete(1);
        if(args[0].startsWith('https://cdn.discordapp.com/attachments')){
          matn = " "
          for (let i = 1; i < args.length; i++) {
            matn = matn + " " + args[i];
          }
          annEmbed
          .setTitle(`${matn}`)
          .setThumbnail('https://static.vecteezy.com/system/resources/thumbnails/001/760/457/small/megaphone-loudspeaker-making-announcement-vector.jpg')
          .setColor("#FF0000")
          .setImage(args[0])
          .setAuthor('AJ 𝒃𝒐𝒕', 'https://cdn.discordapp.com/attachments/866090129680891974/868299293235240990/vader.png', 'https://discord.gg/ec3yRMnWVq')
          .setFooter('movafagh va pirooz bashid')
          .setTimestamp();
        }
        else{
          for (let i = 0; i < args.length; i++) {
            matn = matn + " " + args[i];
          }
          annEmbed
          .setColor("#FF0000")
          .setTitle(`${matn}`)
          .setAuthor('AJ 𝒃𝒐𝒕', 'https://cdn.discordapp.com/attachments/866090129680891974/868299293235240990/vader.png', 'https://discord.gg/ec3yRMnWVq')
          .setThumbnail('https://static.vecteezy.com/system/resources/thumbnails/001/760/457/small/megaphone-loudspeaker-making-announcement-vector.jpg')
          .setFooter('movafagh va pirooz bashid')
          .setTimestamp();
        }
        message.guild.channels.cache.get("879829940902694933").send("@everyone");
        message.guild.channels.cache.get("879829940902694933").send(annEmbed);
    } else {
      message.reply("you dont have access to this command");
    }
  },
};

// 879824024639795270