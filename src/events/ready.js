var { psc, bot } = require('../../index.js');

async function action() {
	console.log(`Logged in as ${bot.user.tag}`);
}

psc.event("ready", action);
