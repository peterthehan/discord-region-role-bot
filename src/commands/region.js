const { regionRoleLimit } = require('../config');
const getCountry = require('../util/getCountry');
const getMemberRegionRoles = require('../util/getMemberRegionRoles');
const getRegionRole = require('../util/getRegionRole');
const hasRegionRole = require('../util/hasRegionRole');
const listRegionRoles = require('../util/listRegionRoles');

module.exports = {
  name: 'region',
  aliases: ['rr'],
  guildOnly: true,
  removeFalsyArgs: true,
  requireArgs: true,
  deleteCommand: false,
  run: async (message, args) => {
    const [regionRolesToRemove, regionRolesToAdd] = [[], []];
    const countries = args.map(getCountry).filter(Boolean);
    for (const country of countries) {
      const regionRole = await getRegionRole(message.guild, country);
      const hasRole = hasRegionRole(message.member, regionRole);
      (hasRole ? regionRolesToRemove : regionRolesToAdd).push(regionRole);
    }

    const messages = [];

    if (regionRolesToRemove.length) {
      messages.push(`Removed ${listRegionRoles(regionRolesToRemove)}.`);
      await message.member.roles.remove(regionRolesToRemove);
    }

    if (regionRolesToAdd.length) {
      const memberRoles = getMemberRegionRoles(message.member);
      const willAddCount = Math.max(regionRoleLimit - memberRoles.length, 0);

      const willAdd = regionRolesToAdd.slice(0, willAddCount);
      if (willAdd.length) {
        messages.push(`Added ${listRegionRoles(willAdd)}.`);
        await message.member.roles.add(willAdd);
      }

      const willNotAdd = regionRolesToAdd.slice(willAddCount);
      if (willNotAdd.length) {
        messages.push(
          `Could not add ${listRegionRoles(
            willNotAdd
          )} (${regionRoleLimit} region role limit).`
        );
      }
    }

    if (messages.length) message.channel.send(messages.join('\n'));
  }
};
