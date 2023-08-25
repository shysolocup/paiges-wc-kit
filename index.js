const config = require('./config.json');

const { Client } = require('discord.js');
const bot = new Client({ intents: config.intents });
const { WillClient } = require('willclient');
const wc = new WillClient({ client: bot, prefix: config.prefix });

const { Soup } = require('stews');

let compiles = Soup.from(config.compile);

compiles = compiles.map( (call, dir) => {
	return wc.compile(dir);
});

let stuff = Soup.from({ wc, bot });
let exp = stuff.merge(compiles);

module.exports = exp;
config.build.forEach( (dir) => {
	wc.build(dir);
});


bot.login(config.token);
