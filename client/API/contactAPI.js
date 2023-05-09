import axios from "axios"

const contactAPI = {
   urlForContact: "http://127.0.0.1:4000/contact",
   getContacts(correct = () => {}, uncorrect = () => {}) {
      return axios.get(this.urlForContact).then(correct).catch(uncorrect)
   },
}

export default contactAPI
