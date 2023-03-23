const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Whats conectado!');
});

client.initialize();


var nome ="xvx99*";
// Aqui ele escuta alguma mensagem;
client.on('message', async message => {
    const contact = await message.getContact();

	if(message.body === 'Bom dia') {
		client.sendMessage(message.from, 'Olá aqui é o Romeuzinho seja bem vindo! sou o robô da Gesconti!');
	}

    if(message.body !== null && message.body !== 'Bom dia' && nome === "xvx99*"){
        nome = message.body;
        //console.log(nome)
        client.sendMessage(message.from, + nome +'Escolha qual setor você gostaria de falar:');
        client.sendMessage(message.from, '1. Setor ### \n 2. Setor ### \n  3. Setor ###');
    }
    else if(message.body !== null && message.body === "1"){
        setTimeout(function(){
            message.reply(`@${contact.number}` + 'Aguarde um instante que o setor responsavel já irá lhe responder.');
            client.sendMessage('*Amanda Setor ###*');
        }) + Math.floor(Math.random() * 1000);
    }
    else if(message.body !== null && message.body === "2"){
        setTimeout(function(){
            message.reply(`@${contact.number}` + 'Aguarde um instante que o setor responsavel já irá lhe responder.');
            client.sendMessage('*Elianna Setor ###*');
        }) 
    } 
    else if(message.body !== null && message.body === "3"){
        setTimeout(function(){
            message.reply(`@${contact.number}` + 'Aguarde um instante que o setor responsavel já irá lhe responder.');
            client.sendMessage('*Rita Setor ###*');
        }) 
    } 1000 + Math.floor(Math.random() * 1000);



});
 