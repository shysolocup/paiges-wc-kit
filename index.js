/*
	:: Paige's WillClient Kit :: Version 1.1.1 | 09/09/23 ::
	https://github.com/paigeroid/paiges-wc-kit

*/


// config and client stuff
const config = require('./config.json');

const { Client } = require('discord.js');
const bot = new Client({ intents: config.intents });

const { WillClient } = require('willclient');
const wc = new WillClient({ client: bot, prefix: config.prefix, token: config.token });

const { Soup } = require('stews');
var exp = Soup.from({ wc, bot });


/* compiles things into the exports

	ex:
		var { wc, assets } = require('path to index.js');
		var { emojis } = assets;
  
*/

if (config.compile && Soup.from(config.compile).length > 0) {
	let compiles = Soup.from(config.compile);
	compiles = compiles.map( (call, dir) => {
		return wc.compile(dir);
	});

	exp = exp.merge(compiles);
}


// exports the stuff
module.exports = exp;


// adds plugins
if (config.plugins && Soup.from(config.plugins).length > 0) {
	Soup.from(config.plugins).forEach( (call, dir) => {
		wc.addon(call, dir);
	});
}

// if you have any plugins put their setup here:


// builds commands and stuff
config.build.forEach( (dir) => {
	wc.build(dir);
});


// logs into the bot
bot.login(config.token);
