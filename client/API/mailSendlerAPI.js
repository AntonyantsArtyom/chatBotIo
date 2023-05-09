import axios from "axios"

const mailSendlerAPI = {
   urlForSendNewClientMail: "http://127.0.0.1:4000/sendNewClientMail",
   sendNewClientMail(mail, correct = () => {}, uncorrect = () => {}) {
      return axios.post(this.urlForSendNewClientMail, { mail }).then(correct).catch(uncorrect)
   },
}

export default mailSendlerAPI
