var { wc, bot } = require('../../../index.js');

async function action(ctx, cmd) {
	if (cmd.onCooldown) {
			return wc.reply(
				`You can use this command again ${cmd.cooldown.relative}`, 
				{ deleteAfter: "1s" }
			);
	}
	
	let user = (cmd.args[0]) ? await wc.fetchUser(cmd.args[0]) : ctx.author;
	if (!user) user = ctx.author;

	let avatar = wc.user.avatarURL(user);

	
	let embed = new wc.Embed({
		author: { name: user.username, icon: avatar },
		
		description: `### [Avatar](${avatar})`,
		image: avatar,
		
		color: wc.colors.blurple
	});

	
	ctx.reply({ embeds: [embed] });
}

wc.command({ name: "avatar", aliases: ["av"], cooldown: "5s" }, action);
