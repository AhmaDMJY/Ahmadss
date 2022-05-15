module.exports = {
    name: 'clear',
    description: "this command for clear the chat" ,
    async execute(message, args){
        if(message.member.roles.cache.has('879824024639795270')){
        if(!args[0]) return message.reply("enter a number");
        if(isNaN(args[0])) return message.reply("please enter correct number");
        if(args[0] > 100 ) return message.reply("you can't delete more than 100");
        if(args[0] < 1 ) return message.reply("Please enter a number greater than 1");
                var clear = Number(args[0]) + 1 ;
        await message.channel.messages.fetch({limit: clear}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.reply(args[0] + " message deleted")
            .then(msg => {
                setTimeout(() => msg.delete(), 3000)
              })

        });
    }else{
        message.reply("you dont have access to this command");
    }
 
    }
}