const Discord = require('discord.js'); // libs
	const bot = new Discord.Client();
	const config = require("./config.json"); //config
	var domain = ["setup domain", "setup a domain", "set up a domain", "set up domain"]
	var panel = ["log into the panel"]
	var crash = ["server crashed", "server keeps crashing", "server crashing"]
	var lagg = ["server is lagging", "server laggs", "server is still lagging"]
	var thank = ["thank you bot", "thanks bot", "bot thank you"]
	var flags = ["aikar flags", "aikars flags"]
	var java = ["java 11", "java11"]
	var timings = ["timings report"]
	var SexyNerd = ["who is the sexiest nerd"]
	var mostsexyest = ["sexiest nerd of all"]
	var servericon = ["server icon"]
	var plugins = ["install plugins"]
    var pinning = ["what is cpu pinning", "what is server splitting"]
    var ddos = ["your ddos protection"]
	var locations = ["locations do you offer", "what locations"]
    var paneldown = ["is the panel down", "is the panel having issues"]
    var installjars = ["install paper", "install bukkit", "install spigot"]
    var rentserburs = ["rent servers", "where do you colocate", "colocate"]
    // var staffs = ["<@306458095868051456>","<@267410852045389824>", "&Simon.#4921"] // staff ids when mentioned in order: Nerd, Da Progogrammer, Simon
    var dedip = ["get a dedicated ip"]
    
    
    const channelIDs = ['732623827917602837']; // channel ids for channel restrection.


		bot.on('message', (message) => {
			if(message.author.bot) return;
			const msgcontent = message.content.toLowerCase();
			if (channelIDs.includes(message.channel.id)) return;
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
			description: "Hello! If your server crashed, please upload the crash report into a paste service. The report can be found in home/continer/crash-reports/. After uploading the reports, please open a ticket with your 					server id in <#732619830787702916>."	
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
			
			
			for (var k=0; k < java.length; k++) {
			if (msgcontent.includes(java[k])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "We do support Java 11. You can manually change it under settings > container version."
			}});
			}}
			
			
			for (var l=0; l < timings.length; l++) {
			if (msgcontent.includes(timings[l])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "You can make a timings report using the command `timings report`."
			}});
			}}
			
			for (var m=0; m < SexyNerd.length; m++) {
			if (msgcontent.includes(SexyNerd[m])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "The General nerd is by far the most sexy nerd"
			}});
			}}
			
			for (var y=0; y < mostsexyest.length; y++) {
			if (msgcontent.includes(mostsexyest[y])) {
            message.channel.send("https://media1.tenor.com/images/27e6a4a6de06644d0d449c242ca1996d/tenor.gif?itemid=8371338");
			}}
			
			for (var n=0; n < servericon.length; n++) {
			if (msgcontent.includes(servericon[n])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! To install a server icon for your server, please refer to the following guide: https://www.youtube.com/watch?v=XD_4taPylB4 "
			}});
			}}
			
			for (var v=0; v < plugins.length; v++) {
			if (msgcontent.includes(plugins[v])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! To install plugins for your server, please click on the linK: https://bukkit.gamepedia.com/Installing_Plugins "
			}});
			}}
			
           	for (var m=0; m < pinning.length; m++) {
			if (msgcontent.includes(pinning[m])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! CPU pinning is where you allocate a server to use specific CPU cores (EG, cores 1 and 2) meaning you can create multiple servers that all share the exact same CPU cores and total pool of RAM and 				Disk. This means you can run multiple servers (a network) from a single EnviroMC dedicated minecraft server!"
			}});
			}}
			
           	for (var c=0; c < ddos.length; c++) {
			if (msgcontent.includes(ddos[c])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! With our new locations in Dallas and New York, we offer an incredible 3.5Tbit/s of DDoS protection."
			}});
			}}
            
            for (var x=0; x < locations.length; x++) {
			if (msgcontent.includes(locations[x])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! We offer Dallas and Helsinki for Budget and the additional locations of Germany, Singapore and New York for Premium."
			}});
			}}

            for (var y=0; y < paneldown.length; y++) {
			if (msgcontent.includes(paneldown[y])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! Try refreshing the page and checking <#726080201968058389> and <#764610424510742529> to see if we have announced anything. Please **DO NOT** create a ticket regarding the issue."
			}});
			}}
            
            for (var í=0; í < installjars.length; í++) {
			if (msgcontent.includes(installjars[í])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "Hello! We reccomend using paper. You can find how to install it here: \n https://www.youtube.com/watch?v=skOd0iKwing"
			}});
			}}
            
            for (var á=0; á < rentserburs.length; á++) {
			if (msgcontent.includes(rentserburs[á])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "EnviroMC uses NextArray and Path.net protection for its colocated servers."
			}});
			}}
			
			
            for (var é=0; é < dedip.length; é++) {
			if (msgcontent.includes(dedip[é])) {
			message.channel.send({embed: {
			title: "EnviroMC Reply",
			url: "https://github.com/KoxSosen/EnviroReply",
			color: 3066993,
			description: "You can order a Dedicated IP at checkout (or through a ticket if you already have the server) for an additional $3/month."
			}});
			}}
            
		
	//		if(message.member.roles.cache.has(287312849297080320)) return;
	//		for (var l=0; l < staffs.length; l++) {	
	//		if (msgcontent.includes(staffs[l])) {
	//	    message.channel.send({embed: {	
	//		title: "EnviroMC Reply",
	//		url: "https://github.com/KoxSosen/EnviroReply",
	//		color: 3066993,
	//		description: "Hello! Please don't mention staff members."	
	//		}});
    // }}			
			
			
  })      


	bot.login(config.token);

	bot.on("ready", () => {
	  console.log(`Logged in as ${bot.user.tag}!`);
	  bot.user.setActivity('Secretly hacking the EnviroMc site...', { type: 'PLAYING' });
	});
