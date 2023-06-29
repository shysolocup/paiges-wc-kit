var { psc, bot } = require('../../index.js');

async function action(ctx, cmd) {
	if (cmd.onCooldown) {
			return psc.reply(
				`You can use this command again ${cmd.cooldown.relative}`, 
				{ deleteAfter: "1s" }
			);
	}
	
	let user = (cmd.args[0]) ? await psc.fetchUser(cmd.args[0]) : ctx.author;
	if (!user) user = ctx.author;

	let avatar = psc.user.avatarURL(user);

	
	let embed = new psc.Embed({
		author: { name: user.username, icon: avatar },
		
		description: `### [Avatar](${avatar})`,
		image: avatar,
		
		color: psc.colors.blurple
	});

	
	ctx.reply({ embeds: [embed] });
}

psc.command({ name: "avatar", aliases: ["av"], cooldown: "5s" }, action);
