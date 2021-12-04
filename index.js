process.env.NTBA_FIX_319 = 1;
const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const BOT_TOKEN = 'XXXXXXXXXXXXXXXXX';
const targetChatId = -XXXXXXXXXXXXXXXXX;
const file = process.env.FTP_FILE;
const pathToDir = "/#pathToFtpDir#/"
const pathToFile = pathToDir + file;

const bot = new TelegramBot(BOT_TOKEN, {
    polling: true,
});
const fileStream = fs.createReadStream(pathToFile);

bot.sendPhoto(targetChatId, fileStream)
  .then(bot.sendDocument(targetChatId, fileStream))
  .catch(function(error){console.log(error)})
  .then(function() {process.exit(0)});
