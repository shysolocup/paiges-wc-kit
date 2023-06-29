var { psc, bot, assets } = require('../../index.js');
var { link } = assets;

async function action(ctx, cmd) {
	let embed = new psc.Embed({
		description: `### [Paige's PSC Kit](${link}) \n Hi! Welcome to Paige's PSC Kit!\n If you have any questions you can put it on the github page above`,

		color: psc.colors.blurple
	});

	ctx.reply({ embeds: [embed] });
}

psc.command("help", action);
