import importantInfo from "../models/importantInfo.js"

const messageToCustomersController = {
   async getText(req, res) {
      let text = await importantInfo.find()
      text = text[0].text
      res.json(text)
   },
}

export default messageToCustomersController
