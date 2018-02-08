const Discord = require("discord.js");

const TOKEN = "NDEwNzAwODk1ODQ4ODkwMzc4.DVxBFw.ekO24GNxgSxW9Fjzhwe8bfokaSs"; 
const PREFIX = "//"

var bot = new Discord.Client();

var dice = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "**69**"
]; 

bot.on("messsage", function(message) {
    console.log(message.content);
});

bot.on("ready", function() {
    console.log("ready")
    bot.user.setGame("In beta");
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0].toLowerCase()) {
        case "hello":
            message.channel.sendMessage(message.author.toString() + " Hey :wave:");
            break;
       
        case "info":
            message.channel.sendMessage("I am a super cool bot created by Valkyrie");
            break;
        
        case "roll":
            if (args[1]) message.channel.sendMessage(dice[Math.floor(Math.random() * dice.length)]);
            else message.channel.sendMessage("This bitch empty... **Yeet**");
            break;
        
        case "embed":
            var embed = new Discord.RichEmbed()
                .addField("Test Title 1", "Test Description 1", true)
                .addField("Test Title 2", "Test Description 2", true)
                .addField("Test Title 3", "Test Description 3", true)
                .addField("Test Title 4", "Test Description 4", true)
                .addField("Test Title 5", "Test Description 5", true)
                .setColor(0x00FFFF)
                .setFooter("This embed is pretty cool")
                .setThumbnail(message.author.avatarURL)
            
            message.channel.sendEmbed(embed);
            break;
        
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + " I'm walking here");
            break;

        if (msg.startsWith(prefix + "WEATHER")) {
            
            
            weather.find({search: args.join(" "), degreeType: "F"}, function(err, result){
                if (err) message.channel.sendMessage(err);

                message.channel.sendMessage(JSON.stringify(result[0].current, null, 2));

            });
        }
        
        default:
            message.channel.sendMessage("**Invalid command**");
    }
});

bot.login(TOKEN).catch(console.log)
client.login(process.env.BOT_TOKEN);
