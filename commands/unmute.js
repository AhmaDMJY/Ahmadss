module.exports = {
    name: 'unmute',
    description: "this is a unmute command" ,
    execute(message, args){
        if(message.member.roles.cache.has('879824024639795270')){

            const target = message.mentions.users.first();
            if(target){
                let memberTarget = message.guild.members.cache.get(target.id);
                message.reply( args[0] + " has been unmute successfully ")
                memberTarget.roles.remove("879824025768034335");

            }else{
                message.reply("something went wrong!");
            }
        }else{
            message.reply("you dont have access to this command");
        }
            
    }
}