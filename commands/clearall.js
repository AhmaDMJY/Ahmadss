module.exports = {
    name: 'clearall',
    description: "this is a clearall command" ,
    execute(message, args){
        if(message.member.roles.cache.has('879824024639795270')){
            message.channel.bulkDelete(100);
            message.reply("channel has been cleared successfully")
    }else{
        message.reply("you dont have access to this command");
    }
 
    }
}