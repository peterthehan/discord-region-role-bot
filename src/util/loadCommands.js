const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

module.exports = client => {
  const commands = new Collection();

  console.log('dirname', __dirname);
  console.log('filename', __filename);
  console.log('process', process.cwd());
  console.log('resolve', path.resolve(__dirname, '../commands'));
  console.log('test');
  fs.readdirSync(path.resolve(__dirname, '../commands'))
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
      const command = require(`../commands/${file}`);
      commands.set(command.name, command);
    });

  client.commands = commands;
};
