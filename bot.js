const mf = require('mineflayer');
const cfg = require('./minecraft.json');
const bot = mf.createBot({
    host: cfg.ip,
    username: 'tutorialbot',
    version: '1.19.2'
})

bot.on('chat', (u,m) => {
    if(m.startsWith('bot')) {
        bot.chat('bot')
    }
})
bot.on('kicked', console.log)
bot.on('error', console.log)