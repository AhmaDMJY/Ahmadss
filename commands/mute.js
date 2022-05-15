const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "this is a mute command" ,
    execute(message, args){
        if(message.member.roles.cache.has('879824024639795270')){

            const target = message.mentions.users.first();
            if(target){
                let memberTarget = message.guild.members.cache.get(target.id);
                 if(!args[1]){
                    message.reply( args[0] + " has been mute successfully ");
                    memberTarget.roles.add("879824025768034335");
                    return
                 }
                message.reply( args[0] + " has been mute for " + args[1]);
                memberTarget.roles.add("879824025768034335");
                setTimeout(function(){
                    memberTarget.roles.remove("879824025768034335");  
                    message.reply( args[0] + " has been unmute successfully ");
                }, ms(args[1]));
            }else{
                message.reply("something went wrong!");
            }
        }else{
            message.reply("you dont have access to this command");
        }
            
    }
}

// 879824024639795270