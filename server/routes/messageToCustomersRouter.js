import { Router } from "express"
import messageToCustomersController from "../controllers/messageToCustomersController.js"

const messageToCustomersRouter = new Router()
messageToCustomersRouter.get("/messageToCustomers", messageToCustomersController.getText)

export default messageToCustomersRouter
