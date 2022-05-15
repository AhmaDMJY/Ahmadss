module.exports = {
    name: 'verify',
    description: "this is a verify command" ,
    async execute(message, args , Discord , client){
        const channel = '879824040494264381';
        const verify = message.guild.roles.cache.find(role => role.name === "Member");
        const Everify = '✅';

        let embed = new Discord.MessageEmbed()
            .setColor('#7af637')
            .setTitle('please react to verify');
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(Everify);



    }
}