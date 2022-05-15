module.exports = {
    name: 'ping',
    description: "this command help you to find your ping",
    execute(message, args , Discord) {
        // const ping = (message.createdTimestamp - new Date().getTime())//.toString().split('');
        const ping = (Date.now() - message.createdTimestamp)//.toString().split('');
        const eping = new Discord.MessageEmbed().setColor("#b5b5b5").setTitle("Pinging... \n please wait")
        // message.channel.send(eping);
        message.channel.send(eping).then(sent => {
            setTimeout(()=>{
                const eping2 = new Discord.MessageEmbed().setColor("#b5b5b5").setTitle(`your ping:`).setDescription(`\n :hourglass: ${sent.createdTimestamp - message.createdTimestamp}ms \n :stopwatch: ${message.createdTimestamp - new Date().getTime()}ms`)
                sent.edit(eping2)
                console.log(`\nRoundtrip latency: \n ${sent.createdTimestamp - message.createdTimestamp}ms`)
            },2000)
            });
    }
}
///// 879824024639795270