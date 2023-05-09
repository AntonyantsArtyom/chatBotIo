import mailSendler from "../mailSendler/mailSendler.js"

const mailController = {
   sendNewClientMail(req, res) {
      const mail = mailSendler.sendNewClientMail(req.body.mail)
      res.json(mail)
   },
}

export default mailController
