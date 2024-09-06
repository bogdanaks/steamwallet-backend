import TelegramBot from "node-telegram-bot-api"
import config from "./config"
// import { message } from "telegraf/filters"

const bot = new TelegramBot(config.BOT_TOKEN, { polling: true, testEnvironment: true })

bot.onText(/\/start/, function onPhotoText(msg) {
  const opts: TelegramBot.SendMessageOptions = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Пополнить Steam",
            web_app: {
              url: config.WEB_APP_URL,
            },
          },
        ],
      ],
    },
  }
  bot.sendMessage(
    msg.chat.id,
    `Привет, ${msg.chat.first_name}! Это бот пополнения Steam аккаунтов. \nЧтобы открыть приложение нажмите 'Пополнить Steam'`,
    opts
  )
})
