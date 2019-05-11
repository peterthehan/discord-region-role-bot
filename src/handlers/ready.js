const { guilds } = require('../config');
const getEmptyRegionRoles = require('../util/getEmptyRegionRoles');

module.exports = client => {
  console.log(`${client.user.tag}: Ready`);

  for (const guildId of guilds) {
    const guild = client.guilds.get(guildId);
    if (!guild) {
      continue;
    }

    const emptyRegionRoles = getEmptyRegionRoles(guild.roles);
    if (!emptyRegionRoles.length) {
      console.log(`No roles to delete for ${guild.name}.`);
      continue;
    }

    console.log(
      `Empty roles to be deleted for ${guild.name}: ${emptyRegionRoles
        .map(role => role.name)
        .join(', ')}`
    );
    emptyRegionRoles.forEach(role => role.delete());
  }
};
