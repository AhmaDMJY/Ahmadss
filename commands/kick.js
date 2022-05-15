
module.exports = {
    name: 'kick',
    description: "this is a kick command" ,
    execute(message, args){
        if(message.member.roles.cache.has('879824024639795270')){

            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.reply( memberTarger + "  has been kicked successfully");
            }else{
                message.reply("something went wrong!");
            }
        }else{
            message.reply("you dont have access to this command");
        }
            
    }
}