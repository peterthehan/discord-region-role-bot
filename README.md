# Discord Region Role Bot

A Discord bot that allows users to self-assign regional country roles using flag emojis.

<div align="center">
  <img src="https://raw.githubusercontent.com/peterthehan/discord-region-role-bot/master/assets/regionRole.gif" />
</div>

## Setup

1. Adapt and follow the steps found in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

> Don't forget to give your bot the `Manage Roles` permission!

2. Open [src/config.js](https://github.com/peterthehan/discord-region-role-bot/blob/master/src/config.js) to configure your own settings:

```js
regionRoleLimit: 1
```

> `regionRoleLimit` is the maximum number of regional country roles a user is able to have.

> List of flag emojis can be found at https://emojipedia.org/flags/.
