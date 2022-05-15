module.exports = async (client) =>{
    const guild = client.guilds.cache.get('805791318164373525');
    let i = 1;
    setInterval(() => {
     const memberCount =guild.memberCount;
     const familymember = client.guilds.cache.get('805791318164373525').roles.cache.get('879824031606538290').members.size
     const channel = guild.channels.cache.get("879824050086641674");
     const channel2 = guild.channels.cache.get("879824051156164700");
     channel.setName(`「👤」: ${memberCount}`); 
     channel2.setName(`「🕵🏻」:  ${familymember}`); 
     console.log( i + "_updating member count to "+ memberCount );
     console.log(familymember);
     i++
     client.user.setActivity(`${memberCount} Discord member`, { type: "WATCHING" });
    }, 60000);
}