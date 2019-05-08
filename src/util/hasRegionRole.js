module.exports = (member, regionRole) =>
  member.roles.some(({ id }) => id === regionRole.id);
