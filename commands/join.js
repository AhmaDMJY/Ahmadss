const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

module.exports = {
  name: "join",
  description: "join voice and play music",
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send("you need to be in a voice channel");
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) return message.channel.send("you dont have access to play music in this channel");
    if (!args.length) return message.channel.send("please enter your music or link");
    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {

      const videoResult = await ytSearch(query);

      return (videoResult.videos.length > 1) ? videoResult.video[0] : null;
    }
    const video = await videoFinder(args.join(' '));

    if(video){
      const stream = ytdl(video.url, );//{filter: "audioonly"}
      connection.play(stream, { seek: 0, volume: 1 })
      .on("finish", () => {
        // voiceChannel.leave();
        console.log("finish")
      });
      await message.reply(':thumbsup: new playing your music');
    }else{
        message.channel.send("no music result found!");
    }
  }
};
