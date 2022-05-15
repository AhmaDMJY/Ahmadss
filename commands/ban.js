
module.exports = {
    name: 'ban',
    description: "this is a ban command" ,
    execute(message, args){
        if(message.member.roles.cache.has('879824024639795270')){

            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.bulkDelete(1);
                message.reply( memberTarger + "  has been banned successfully")
                console.log(message.author.username + " banned " + memberTarger)
            }else{
                message.reply("something went wrong!");
            }
        }else{
            message.reply("you dont have access to this command");
        }
            
    }
}