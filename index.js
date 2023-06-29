const config = require('./config.json');

const { Client } = require('discord.js');
const bot = new Client({ intents: config.intents });
const { PSClient } = require('psc');
const psc = new PSClient({ client: bot, prefix: config.prefix });

const { Soup } = require('stews');

let compiles = Soup.from(config.compile);

compiles = compiles.map( (call, dir) => {
	return psc.compile(dir);
});

let stuff = Soup.from({ psc, bot });
let exp = stuff.merge(compiles);

module.exports = exp;
config.build.forEach( (dir) => {
	psc.build(dir);
});


bot.login(config.token);
