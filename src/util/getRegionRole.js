module.exports = async (guild, country) => {
  const regionRole = guild.roles.find(({ name }) =>
    name.includes(country.flag)
  );

  return regionRole
    ? regionRole
    : guild.roles.create({
        data: { name: `${country.name.common} ${country.flag}`, permissions: 0 }
      });
};
