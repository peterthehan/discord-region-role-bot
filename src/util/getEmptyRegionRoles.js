const getRegionRoles = require('./getRegionRoles');

module.exports = guildRoles => {
  const regionRoles = getRegionRoles();
  return guildRoles
    .filter(
      guildRole => regionRoles.has(guildRole.name) && !guildRole.members.size
    )
    .array();
};
