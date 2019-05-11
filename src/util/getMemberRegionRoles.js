const getRegionRoles = require('./getRegionRoles');

module.exports = member => {
  const regionRoles = getRegionRoles();
  return member.roles.filter(({ name }) => regionRoles.has(name)).array();
};
