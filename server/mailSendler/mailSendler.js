import nodemailer from "nodemailer"
import { google } from "googleapis"
import mailSendlerConfig from "../configs/mailSendlerConfig.js"

const mailSendler = {
   config: mailSendlerConfig,
   sendNewClientMail(mail) {
      const OAuth2 = google.auth.OAuth2
      const OAuth2_client = new OAuth2(this.config.clientId, this.config.clientSecret)
      OAuth2_client.setCredentials({ refresh_token: this.config.refreshToken })
      const accessToken = OAuth2_client.getAccessToken()
      const transport = nodemailer.createTransport({
         service: "gmail",
         auth: {
            type: "OAuth2",
            user: this.config.user,
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            refreshToken: this.config.refreshToken,
            accessToken: accessToken,
         },
      })
      const date = new Date().toJSON().slice(0, 10).split("-").reverse().join(".")
      const mail_options = {
         from: this.config.user,
         to: this.config.user,
         subject: `ChatBotIo. Новый клиент - ${date} - ${mail}`,
         text: `почта для связи: ${mail}\nвремя отправки заявки: ${date}`,
      }
      transport.sendMail(mail_options)
      return mail_options
   },
}

export default mailSendler
