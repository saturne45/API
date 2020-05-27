const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Salut') {
    msg.reply('CouCou !');
  }
});
client.on('message', msg => {
    if (msg.content === 'salut') {
      msg.reply('salut !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'bonjour') {
      msg.reply('bonjour !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Bonjour') {
      msg.reply('Bonjour !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Allo') {
      msg.reply('Allo !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'allo') {
      msg.reply('allo !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'yo') {
      msg.reply('yo !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'bonsoir') {
      msg.reply('bonsoir !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Bonsoir') {
      msg.reply('Bonsoir !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Salutation') {
      msg.reply('Salutation !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Site') {
      msg.reply('https://shoprevoltium.doyousoundgood.ca/');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'site') {
      msg.reply('https://shoprevoltium.doyousoundgood.ca/');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'coucou') {
      msg.reply('CouCou !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Coucou') {
      msg.reply('CouCou !');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Bonne nuit') {
      msg.reply('bonne nuit à toi!');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'bonne nuit') {
      msg.reply('bonne nuit à toi!');
    }
  });
 


client.login('NzE0ODM5MTA2NDQ5ODM0MDc1.Xs089A.qPtrdhBzcKWjutz3MZyaHunRKgM');
