var { wc, bot } = require('../../../index.js');

async function action(ctx, cmd) {
	if (cmd.onCooldown) {
			return wc.reply(
				`You can use this command again ${cmd.cooldown.relative}`, 
				{ deleteAfter: "1s", ephemeral: true }
			);
	}
	
	let user = (cmd.args[0]) ? await wc.fetchUser(cmd.args[0].value) : ctx.user;
	if (!user) user = ctx.user;

	let avatar = wc.user.avatarURL(user);

	
	let embed = new wc.Embed({
		author: { name: user.username, icon: avatar },
		
		description: `### [Avatar](${avatar})`,
		image: avatar,
		
		color: wc.colors.blurple
	});

	
	ctx.reply({ embeds: [embed] });
};

let options = [{
    name: "user",
    description: "User to get the avatar of",
    type: "user"
}];

wc.slashCommand({ name: "avatar", desc: "Sends an avatar", cooldown: "5s" }, action);
