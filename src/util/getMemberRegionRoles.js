const wc = require('world-countries');
const wcMap = new Set(wc.map(c => `${c.name.common} ${c.flag}`));

module.exports = member =>
  member.roles.filter(({ name }) => wcMap.has(name)).array();
