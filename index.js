const Discord = require('discord.js'); // libs
const bot = new Discord.Client();
const config = require("./config.json"); //config
var domain = ["setup domain", "how do i domain", "how i domain", "how do I set up a domain"]
var panel = ["how do i log into the panel", "the panel how i log into", "i can't log into the panel"]
var crash = ["server crashed", "server keeps crashing"]
var lagg = ["server is lagging", "server laggs"]


	bot.on('message', (message) => {
		if(message.author.bot) return;
		if (message.channel.id === '808324993422983203') {
		for (var i=0; i < domain.length; i++) {
		if (message.content.includes(domain[i])) {
        message.channel.send('Please check the following guide: https://www.namecheap.com/support/knowledgebase/article.aspx/9765/2208/how-can-i-link-my-domain-name-to-a-minecraft-server/');
		}}
						
		for (var e=0; e < panel.length; e++) {
		if (message.content.includes(panel[e])) {
        message.channel.send('Hello! To log into the panel, please visit https://panel.enviromc.com/, and enter your credentials. If you run into any issues, please open a ticket in <#732619830787702916>.');
        }}
		
		for (var b=0; b < crash.length; b++) {
		if (message.content.includes(crash[b])) {
        message.channel.send('Hello! If your server crashed, please upload the crash report into a paste service. The repor can be fund in home/continer/crash-reports/. After that, please open a ticket with your server id in <#732619830787702916>.');
        }}
        
        for (var d=0; d < lagg.length; d++) {
		if (message.content.includes(lagg[d])) {
        message.channel.send('If your server is lagging, please consider sending a timings report in <#732618796401164360>.');
        }}
		
		
		
}
});        

bot.login(config.token);

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity('EnviroMc Helper', { type: 'PLAYING' });
});