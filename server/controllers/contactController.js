import contactData from "../models/contactData.js"

const contactController = {
   async getContacts(req, res) {
      let contact = await contactData.find()
      contact = contact[0]
      contact = { phone: contact.phone, adress: contact.adress }
      res.json(contact)
   },
}

export default contactController
