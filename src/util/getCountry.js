const wc = require('world-countries');

module.exports = flag => wc.find(c => c.flag === flag);
