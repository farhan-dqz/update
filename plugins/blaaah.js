const Asena = require('../events');
const {MessageType} = require("@adiwajshing/baileys");

Asena.addCommand({pattern: 'lot', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
  
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'hi'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'hlo'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(buttonMessage,MessageType.buttonsMessage);
  await message.client.sendMessage('buttonMessage',MessageType.text);
  await message.client.buttonsResponseMessage(selectedButtonId.id1,'buttonMessage',MessageType.buttonsResponseMessage);
  
   let waButtonMessage = await message.prepareMessageFromContent( buttonMessage,{})
    await message.client.sendMessage(waButtonMessage, { waitForAck: true })
    return waButtonMessage;
  }));
  
 Asena.addCommand({on: 'text', fromMe: false, onlyGroup: true}, (async (message, match) => {
        if (match === 'hlo') {
            await message.sendMessage('yuiytuj', MessageType.text);       
        }else if (message.message.includes == 'hi') {
            await message.sendMessage('greolwfjy', MessageType.text);
        } else if (message.message.buttonsResponseMessage  == "hi") {
            await message.sendMessage('hmmm', MessageType.text);
        }else if (message.buttonsResponseMessage?.selectedButtonId === 'id1') {
            await message.sendMessage('gfgzax', MessageType.text);
        }else if (message.message.includes == ('hi')) {
            await message.sendMessage('julie', MessageType.text);
        }  
    }));