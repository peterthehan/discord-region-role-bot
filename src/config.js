module.exports = {
  token: ('TOKEN' in process.env ? process.env : require('../config')).TOKEN,
  prefix: '.',
  commandDelimiter: '\n',
  commandLimit: '1',
  regionRoleLimit: 1,
  guilds: ['258167954913361930']
};
