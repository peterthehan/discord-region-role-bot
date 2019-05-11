const wc = require('world-countries');

module.exports = () => new Set(wc.map(c => `${c.name.common} ${c.flag}`));
