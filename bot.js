const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTI2NDQ0MjU5NzE3NDE0OTEz.DwFRHA.XR6lx3hniZngOqLzuRM38mvJMw4');
