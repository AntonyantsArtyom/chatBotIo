import { Router } from "express"
import contactController from "../controllers/contactController.js"
const contactRouter = new Router()
contactRouter.get("/contact", contactController.getContacts)

export default contactRouter
