module.exports = {
    name: "ticket",
    description: "made a ticket",
    async execute(user, Discord, client) {
      const GuildID = client.guilds.cache.get("805791318164373525");
      const categoryId = "876164888391720990";
      var userName = user.username;
      var userDiscriminator = user.discriminator;
      var bool = false;
      const owner = user;
      GuildID.channels.cache.forEach((channel) => {
        if (
          channel.name ==
          "ticket-" + owner.id
        ) {
          bool = true;
        }
      });
      if (bool == true) {
        const ticket = client.channels.cache.find(
          (channel) =>
            channel.name ===
            "ticket-" + owner.id
        );
        return user.send(`shoma dar hal hazer 1 Ticket baz darid  ${ticket}`);
      }
      GuildID.channels
        .create("ticket " + owner.id, "text")
        .then(async (createdChan) => {
          createdChan
            .setParent(categoryId)
            .then(async (settedParent) => {
              settedParent.overwritePermissions([
                {
                  id: "876164879931830382",
                  deny: ["VIEW_CHANNEL"],
                },
                {
                  id: user.id,
                  allow: [
                    "VIEW_CHANNEL",
                    "ADD_REACTIONS",
                    "ATTACH_FILES",
                    "SEND_MESSAGES",
                    "READ_MESSAGE_HISTORY",
                  ],
                },
                {
                  id: "876164811724038154",
                  allow: [
                    "VIEW_CHANNEL",
                    "ADD_REACTIONS",
                    "ATTACH_FILES",
                    "SEND_MESSAGES",
                    "READ_MESSAGE_HISTORY",
                  ],
                },
              ]);
              const ticket = client.channels.cache.find(
                (channel) =>
                  channel.name ===
                  "ticket-" + owner.id
              );
              user.send(`Ticket shoma ba movafaghiat sakhte shod ${ticket} `);
              var embedParent = new Discord.MessageEmbed()
                .setTitle("Salam, " + user.username.toString())
                .setColor("RANDOM")
                .setDescription("Soalat va moshkelat khodra matrah konid");
              settedParent.send(`<@${user.id}>`);
              let tickets = await settedParent.send(embedParent);
              tickets.react("🔐");
              // const channel2 = "853370511031926814";
              const Everify = "🔐";
              const Everify2 = "✅";
              const Everify3 = "❌";
              const Everify4 = "🗑️";
              const Everify5 = "🪐";
              client.on("messageReactionAdd", async (reaction, user) => {
                if (user.bot) return;
                const ticketresponder = GuildID.members.cache.get(user.id)
                if (reaction.message.channel.id == ticket) {
                  if (reaction.emoji.name === Everify) {
                    tickets.react("✅");
                    tickets.react("❌");
                  }
                  else if (reaction.emoji.name === Everify2){
                    if(ticketresponder.roles.cache.has('876164811724038154')){
                      tickets.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                      tickets.react("🗑️")
                      tickets.react("❌");
                    }
                    else{
                      ticket.updateOverwrite(owner.id, { VIEW_CHANNEL: false , SEND_MESSAGES: false});
                      owner.send("Ticket shoma ba movafaghiat baste shod.")
                    }
                  }
                  else if (reaction.emoji.name === Everify3) {
                    tickets.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                    tickets.react("🔐");
                  }
                  else if (reaction.emoji.name === Everify4){
                    if(ticketresponder.roles.cache.has('876164811724038154')){
                      ticket.updateOverwrite(owner.id, { VIEW_CHANNEL: false , SEND_MESSAGES: false});
                      ticket.updateOverwrite('876164811724038154', { VIEW_CHANNEL: false , SEND_MESSAGES: false});
                      ticket.setName("『🗑️』close " + userName + "-" + userDiscriminator)
                      tickets.react(Everify5);
                    }
                  }
                  else if (reaction.emoji.name === Everify5){
                    if(ticketresponder.roles.cache.has('876164811724038154')){
                      ticket.delete();
                    }
                  }
                  
                  
                }
              });
              //  messageEmbed.react(Everify);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
  
  // if(message.member.roles.cache.has('855012510352015360'))
  