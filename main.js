const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
var randnum = 0;
const uneCommande = '/say '
bot.login(token);

function random (min,max){
    min = Math.ceil(0);
    max = Math.floor(15);
    randnum = Math.floor(Math.random() * (max - min) + min);
}
bot.on('ready', async () => {
    bot.user.setPresence({ game: { name:'motiver les gens' , type: 0} });
    console.log('bot Ready !');
});
bot.on('message' , async message => {
    if(message.author.id === "536108911703359498") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if (message.content.startsWith(uneCommande)){
        message.delete();
        const str = message.content.substring(uneCommande.length);
        message.channel.send(str);
    } 
    if (message.content === "ping"){
        message.channel.send("pong !");
        console.log('ping');
    }
    if (message.content === "pong"){
        message.channel.send("Non ! Je ne dirai pas ping !");
        console.log('pong');
    }           
    if (message.content.match(/j\'y go/i)){
        message.channel.send("d'agneau");
        console.log('go');
    }  
    if (message.content.includes("c\'est parti")){
        message.channel.send("C'est darty mon kiki !");
        console.log('darty');
    }    
    if (message.content.includes("qui es-tu prof")){
        message.channel.send("Puisque celà ne se voit pas, je suis un BOT, un agent logiciel automatique ou semi-automatique qui interagit avec des serveurs informatiques. Un BOT se connecte et interagit avec le serveur comme un programme client utilisé par un humain (mouarf), d'où le terme « BOT », qui est la contraction par **aphérèse** de \"ROBOT\". Je vous laisse chercher ce mot, ça pourrait vous servir ...");
        console.log('qui');
    }    
    if (message.content.match(/à plus/i)){
        message.channel.send("dans l\'bus !:bus:");
        console.log('plus');
    }  
    if (message.content.match(/ca marche/i)){
        message.channel.send("ça court même !");
        console.log('marche1');
    }  
    if (message.content.match(/ça marche/i)){
        message.channel.send("ça court même !");
        console.log('marche2');
    }  
    if (message.content.match(/bonne nuit/i)){
        message.channel.send(":kissing_heart::zzz:");
        console.log('BN');
    }  
    if (message.content.includes("bot") || message.content.includes('Bot')){
        message.channel.send("BOT ? On parle de moi ?  :smiley:");
        console.log('bot');
    } 
    if (message.content.match(/a demain/i)){
        message.channel.send("Dans le train :steam_locomotive: !");
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
    if (message.content.includes("je file")){
        message.channel.send("du coton");
        console.log('file');
    }   
    if (message.content.includes("faute")){
        message.channel.send("Nous préférons employer le terme **erreur**. Une Faute - du latin falsus - est un manquement à une règle, alors qu'une erreur - du latin error - n'est rien d'autre qu'une méprise, un défaut de jugement ou d'appréciation");
        console.log('faute');
    }   
    const swearWords = ["socioconstructivisme", "inférence", "socio-constructivisme", "conjecture"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Ohhhhhhhhhh ! Bravo ! :clap:");
 }
    
if (message.content.match(/insulte/i)){
    random()
    if(randnum == 0){
        message.channel.send("Bougre de faux-jeton à la sauce tartare");
        console.log("random");
    }
    if(randnum == 1){
        message.channel.send("Coloquinte à la graisse de hérisson !");
        console.log("random");
    }
    if(randnum == 6){
        message.channel.send("Zouave interplanétaire !");
        console.log("randum");
    }
    if(randnum == 3){
        message.channel.send("Ectoplasme à roulettes !");
        console.log("randum");
    }
    if(randnum == 4){
        message.channel.send("Bougre d’extrait de cornichon !");
        console.log("randum");
    }
    if(randnum == 5){
        message.channel.send("Patagon de zoulous !");
        console.log("randum");
    }   
    if(randnum == 6){
        message.channel.send("Anacoluthe !");
        console.log("randum");
    }  
    if(randnum == 2){
        message.channel.send("Catachrèse !");
        console.log("randum");
    }  
    if(randnum == 8){
        message.channel.send("Bougre d’extrait de crétin des Alpes !");
        console.log("randum");
    }  
    if(randnum == 9){
        message.channel.send("Astronaute d'eau douce !");
        console.log("randum");
    }  
    if(randnum == 10){
        message.channel.send("Simili-martien à la graisse de cabestan !");
        console.log("randum");
    }  
    if(randnum == 11){
        message.channel.send("Concentré de moules à gaufres !");
        console.log("randum");
    }  
    if(randnum == 12){
        message.channel.send("Papou des Carpates !");
        console.log("randum");
    }  
    if(randnum == 13){
        message.channel.send("Sombre oryctérope !");
        console.log("randum");
    }  
    if(randnum == 14){
        message.channel.send("Bougre de phénomène de tonnerre de Brest !");
        console.log("randum");
}
}});



