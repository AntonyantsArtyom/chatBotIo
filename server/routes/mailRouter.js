import { Router } from "express"
import mailController from "../controllers/mailController.js"

const mailRouter = new Router()
mailRouter.post("/sendNewClientMail", mailController.sendNewClientMail)

export default mailRouter
