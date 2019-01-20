const Discord = require('discord.js');
var bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
bot.on('ready', () => {
    bot.user.setPresence({ game: { name:'motiver les gens' , type: 0} });
    console.log('bot Ready !');
});
bot.on('message' , message => {
    if (message.content.match(/bonjour/i)){
        message.reply("Je vous souhaite également une bonne journée ! Aller ! Au boulot !");
        console.log('bonjour');
    }
    if (message.content === "ping"){
        message.channel.send("pong !");
        console.log('ping');
    }
    if (message.content === "pong"){
        message.channel.send("Non ! Je ne dirai pas ping !");
        console.log('pong');
    }    
    if (message.content.match(/salut/i)){
        message.channel.send(":wave:");
        console.log('salut');
    }       
    if (message.content.match(/j\'y go/i)){
        message.channel.send("d'agneau");
        console.log('go');
    }  
    if (message.content.includes ("c'est parti")){
        message.channel.send("C'est darty mon kiki !");
        console.log('darty');
    }    
    if (message.content.match(/a plus/i)){
        message.channel.send("dans l\'bus !:bus:");
        console.log('plus');
    }  
    if (message.content.match(/hello/i)){
        message.channel.send("Hi, how are you ?");
        console.log('hello');
    }    
    if (message.content.match(/coucou/i)){
        message.channel.send("Un bon jour également - bien que je ne voie pas le rapport avec un oiseau");
        console.log('coucou');
    }  
    if (message.content.includes ("fine and you")){
        message.channel.send("Very well !");
        console.log('fine');
    }
    if (message.content.match(/bonne nuit/i)){
        message.channel.send(":kissing_heart::zzz:");
        console.log('BN');
    }  
    if (message.content.includes ("bot") || message.content.includes('Bot')){
        message.channel.send("BOT ? On parle de moi ?  :smiley:");
        console.log('bot');
    } 
    if (message.content.match(/a demain/i)){
        message.channel.send("je n'ai que des transistors au bout des circuits, les mains ne me seraient d'aucune utilité, même deux ! Chaque année des milliers de ROBOTS sont touchés par l'humour-à-deux-balles. Cette maladie n'est pas une fatalité. Aidez-les ! Faites un don pour le Prof ! Voilà, comme ça je me fais même un peu d'argent, c'est pas plus mal !");
        console.log('demain');
    } 
    if (message.content.match(/à demain/i)){
        message.channel.send("je n'ai que des transistors au bout des circuits, les mains ne me seraient d'aucune utilité, même deux ! Chaque année des milliers de ROBOTS sont touchés par l'humour-à-deux-balles. Cette maladie n'est pas une fatalité. Aidez-les ! Faites un don pour le Prof ! Voilà, comme ça je me fais même un peu d'argent, c'est pas plus mal !");
        console.log('demain2');
    } 
    if (message.content.match(/montre/i)){
        message.channel.send(":watch:");
        console.log('montre');
    }   
    if (message.content.match(/file/i)){
        message.channel.send("du coton");
        console.log('file');
    }   
    if (message.content.match(/question/i)){
        message.channel.send("réponse :stuck_out_tongue_closed_eyes:");
        console.log('question');
    }  
    const swearWords = ["socioconstructivisme", "inférence", "socio-constructivisme", "conjecture"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Ohhhhhhhhhh ! Bravo ! :clap:");
}
});

bot.login(token);
