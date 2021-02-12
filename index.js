	const Discord = require('discord.js'); // libs
	const bot = new Discord.Client();
	const config = require("./config.json"); //config
	var domain = ["setup domain"]
	var panel = ["log into the panel"]
	var crash = ["server crashed", "server keeps crashing", "server crashing"]
	var lagg = ["server is lagging", "server laggs", "server is still lagging"]
	var thank = ["thank you bot", "thanks bot", "bot thank you"]
	var flags = ["aikar flags", "aikars flags"]
	var java = ["java 11", "java11"]
	var timings = ["timings report"]


		bot.on('message', (message) => {
			if(message.author.bot) return;
			const msgcontent = message.content.toLowerCase();
			if (message.channel.id === '808324993422983203', '807739045974114324') {
			for (var i=0; i < domain.length; i++) {	
			if (msgcontent.includes(domain[i])) {
		    message.channel.send({embed: {	
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Please check the following guide: https://www.namecheap.com/support/knowledgebase/article.aspx/9765/2208/how-can-i-link-my-domain-name-to-a-minecraft-server/"	
			}});
			}}
							
			for (var e=0; e < panel.length; e++) {
			if (msgcontent.includes(panel[e])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply", 
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! To log into the panel, please visit https://panel.enviromc.com/, and enter your credentials. If you run into any issues, please open a ticket in <#732619830787702916>."	
			}});
			}}
			
			for (var b=0; b < crash.length; b++) {
			if (msgcontent.includes(crash[b])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! If your server crashed, please upload the crash report into a paste service. The repor can be fund in home/continer/crash-reports/. After that, please open a ticket with your server id in <#732619830787702916>."	
			}});
			}}
			
			for (var d=0; d < lagg.length; d++) {
			if (msgcontent.includes(lagg[d])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "If your server is lagging, please consider sending a timings report in <#732618796401164360>."
			}});	
			}}
			
			
			for (var f=0; f < thank.length; f++) {
			if (msgcontent.includes(thank[f])) {
			message.channel.send("https://media1.tenor.com/images/15bafc0b414757acab81650a6ff21963/tenor.gif?itemid=11238673");
			}}
			
			for (var j=0; j < flags.length; j++) {
			if (msgcontent.includes(flags[j])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "We do support Aikars flags. Please open a ticket, and our staff team will set them up for you."
			}});
			}}
			
			
			for (var k=0; k < flags.length; k++) {
			if (msgcontent.includes(java[k])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "We do support Java 11. Please open a ticket, and our staff team will set it up for you."
			}});
			}}
			
			
			for (var l=0; l < flags.length; l++) {
			if (msgcontent.includes(timings[l])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "You can make a timings report using the command `timings report`."
			}});
			}}
			
		
			
			
			
	}
	});        

	bot.login(config.token);

	bot.on("ready", () => {
	  console.log(`Logged in as ${bot.user.tag}!`);
	  bot.user.setActivity('EnviroMc Helper', { type: 'PLAYING' });
	});