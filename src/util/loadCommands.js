const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

module.exports = (client, filename) => {
  const commands = new Collection();

  fs.readdirSync(path.resolve(filename, '../commands'))
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
      const command = require(`../commands/${file}`);
      commands.set(command.name, command);
    });

  client.commands = commands;
};
