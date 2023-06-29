const { Client } = require('discord.js');
const bot = new Client({ intents: 33283 });
const { PSClient } = require('psc');
const psc = new PSClient({ client: bot, prefix: "." });


const config = require('./config.json');


bot.on('ready', async () => {
	console.log(`Logged in as ${bot.user.tag}`);
});


let classes = psc.compile("src/classes");
let assets = psc.compile("src/assets");
let data = psc.compile("src/data");


module.exports = { psc, bot, classes, assets, data };
psc.build("src/commands");
psc.build("src/events");


bot.login(config.token);
