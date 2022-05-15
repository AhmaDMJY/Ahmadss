
module.exports = {
    name: 'warn',
    description: "this is a warn command" ,
    execute(message, args){
        if(message.member.roles.cache.has('879824028699885568')){
            const wmember = message.mentions.users.first();
            message.channel.bulkDelete(1);
            ac = "";
            for (let i = 1; i < args.length ; i++) {
              ac = ac + " " + args[i];
            }
            if(!wmember) return message.reply("command ra kamel benevisid '+warn [mention] [tozih]'");
            if(!ac) return message.reply("command ra kamel benevisid '+warn [mention] [tozih]'");
            // warn1 = 879836859000291358
            // warn2 = 879837061308366918
            // warn3 = 879837136986198057
            if(!message.mentions.members.first().roles._roles.has('879836859000291358')){
                message.guild.channels.cache.get("879824085369122847").send("```diff\n"+`-${ac}`+" \n``` "+`${args[0]}`);
                message.mentions.members.first().roles.add('879836859000291358')
            }
            else if(message.mentions.members.first().roles._roles.has('879836859000291358') && (!message.mentions.members.first().roles._roles.has('879837061308366918'))){
                message.guild.channels.cache.get("879824085369122847").send("```diff\n"+`-${ac}`+" \n``` "+`${args[0]}`);
                message.mentions.members.first().roles.add('879837061308366918')
            }
            else if(message.mentions.members.first().roles._roles.has('879836859000291358') && message.mentions.members.first().roles._roles.has('879837061308366918') && (!message.mentions.members.first().roles._roles.has('879837136986198057'))){
                message.guild.channels.cache.get("879824085369122847").send("```diff\n"+`-${ac}`+" \n``` "+`${args[0]}`);
                message.mentions.members.first().roles.add('879837136986198057')

            }
            else if(message.mentions.members.first().roles._roles.has('879836859000291358') && message.mentions.members.first().roles._roles.has('879837061308366918') && message.mentions.members.first().roles._roles.has('879837136986198057')){
                // wmember.send("test");
                message.guild.channels.cache.get("879824085369122847").send("```diff\n"+`-${ac}`+" \n``` "+`${args[0]}`);
                message.mentions.members.first().roles.remove('879836859000291358'); 
                message.mentions.members.first().roles.remove('879837061308366918'); 
                message.mentions.members.first().roles.remove('879837136986198057'); 
                message.mentions.members.first().roles.remove('879824027013775441');  
                message.mentions.members.first().roles.remove('879824028699885568');  
                message.mentions.members.first().roles.remove('879824029391912960');  
                message.mentions.members.first().roles.remove('879824030063009812');  
                message.mentions.members.first().roles.remove('879824031606538290');  
                message.mentions.members.first().roles.remove('879824024639795270');  
                message.mentions.members.first().send("salam "+message.mentions.members.first().user.username + " aziz moteasefane shoma be dalil { "+ ac +" } fire shodid agar fekr mikonid moshkeli pish amade ast ticket baz konid \n <#850821165648052284>");
                
            }

            // message.channel.send("```diff\n"+`-${ac}`+" \n``` "+`${args[0]}`)
            // member.send("test")
        }else{
            message.reply("you dont have access to this command");
        }
            
    }
}
