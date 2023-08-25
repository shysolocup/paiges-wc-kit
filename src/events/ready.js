var { wc, bot } = require('../../index.js');

async function action() {
	console.log(`Logged in as ${bot.user.tag}`);
}

wc.event("ready", action);
