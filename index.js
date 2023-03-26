const Discord = require("discord.js-selfbot-v13"); //npm i discord.js-selfbot-v13
const client = new Discord.Client(
    {
        checkUpdate: false
    }
);

require('./express');
const {userAccount} = require("sphinx-run");

new userAccount(client, Discord).autoReaction({
    channel: 'AnyChannelID',
    user: 'AnyUserID',
    //customBotId: ['SomeBotIDS']
});

client.login(process.env.token);