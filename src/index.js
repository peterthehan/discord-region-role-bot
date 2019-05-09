#!/usr/bin/env node

const { Client } = require('discord.js');
const { token } = require('./config');
const requireUncached = require('./util/requireUncached');

const client = new Client();
console.log(process.cwd(), __dirname);
requireUncached('./loadCommands')(client, __dirname);
require('./util/loadListeners')(client);

client.login(token).catch(error => {
  console.error(error);
  process.exit(1);
});
