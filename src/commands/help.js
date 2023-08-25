var { wc, bot, assets } = require('../../index.js');
var { link } = assets;

async function action(ctx, cmd) {
	let embed = new wc.Embed({
		description: `### [Paige's WillClient Kit](${link}) \n Hi! Welcome to Paige's WillClient Kit!\n If you have any questions you can put it on the github page above`,

		color: wc.colors.blurple
	});

	ctx.reply({ embeds: [embed] });
}

wc.command("help", action);
