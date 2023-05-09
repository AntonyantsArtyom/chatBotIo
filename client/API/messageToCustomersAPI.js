import axios from "axios"

const messageToCustomersAPI = {
   urlForMessageToCustomers: "http://127.0.0.1:4000/messageToCustomers",
   getMessageToCustomers(correct = () => {}, uncorrect = () => {}) {
      return axios.get(this.urlForMessageToCustomers).then(correct).catch(uncorrect)
   },
}

export default messageToCustomersAPI
