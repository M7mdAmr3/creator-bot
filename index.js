const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'c!rules') {
    const rulesEmbed = new Discord.MessageEmbed()
      .setColor('#18E186 ')
      .setTitle('...Rules Of The Server....')
      .addFields(
        { name: '\u200B', value: 'To Report:'},
        { name: '\u200B', value: '[Report (type)]'},
        { name: '(information)', value: '\u200B'},
        { name: '\u200B', value: 'and the Type Should Either Be `Player` OR `Expliot`'},
      );
      msg.channel.send(rulesEmbed)
      msg.delete();
}
});
client.login("NzEzOTY0OTA5MDYyMjU4NzY4.XtJSrA.aj98U_W9SHnUcpNLJCnWBGGXGv0");
