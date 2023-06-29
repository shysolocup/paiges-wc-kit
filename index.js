const { Client } = require('discord.js');
const bot = new Client({ intents: 33283 });
const { PSClient } = require('psc');
const psc = new PSClient({ client: bot, prefix: "." });

const { Soup } = require('stews');

const config = require('./config.json');


bot.on('ready', async () => {
	console.log(`Logged in as ${bot.user.tag}`);
});


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
