const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
var words = ["setup domain", "how do i domain", "how i domain", "how do i setup a domain"]
var panel = ["how do i log into the panel", "the panel how i log into", "i can't log into the panel"]
var crash = ["server crashed", "server keeps crashing"]



	bot.on('message', (message) => {
		if(message.author.bot) return;
		if (message.channel.id === '808324993422983203') {
		for (var i=0; i < words.length; i++) {
		if (message.content.includes(words[i])) {
        message.channel.send('https://www.namecheap.com/support/knowledgebase/article.aspx/9765/2208/how-can-i-link-my-domain-name-to-a-minecraft-server/');
		}}
						
		for (var i=0; i < panel.length; i++) {
		if (message.content.includes(panel[i])) {
        message.channel.send('Hello! To log into the panel, please visit https://panel.enviromc.com/, and enter your credentials. If you run into any issues, please open a ticket in <#732619830787702916>.');
        }}
		
		for (var i=0; i < crash.length; i++) {
		if (message.content.includes(crash[i])) {
        message.channel.send('Hello! If your server crashed, please upload the crash report into a paste service. The repor can be fund in home/continer/crash-reports/ <#732619830787702916>.');
        }}
		
		
		
}
});        

bot.login(config.token);

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity('EnviroMc Helper', { type: 'PLAYING' });
});