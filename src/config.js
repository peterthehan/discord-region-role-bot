module.exports = {
  token: ('TOKEN' in process.env ? process.env : require('../config')).TOKEN,
  prefix: '.',
  commandDelimiter: '\n',
  commandLimit: '1',
  regionRoleLimit: 1
};
