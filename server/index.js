import express from "express"
import mailRouter from "./routes/mailRouter.js"
import cors from "cors"
import mongoose from "mongoose"
import messageToCustomersRouter from "./routes/messageToCustomersRouter.js"
import contactRouter from "./routes/contactRouter.js"
const port = 4000
const db_url = "mongodb://localhost:27017/ChatBotIo"
const app = express()
app.use(
   cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      exposedHeaders: "*",
   })
)
app.use(express.json())
app.use(mailRouter)
app.use(messageToCustomersRouter)
app.use(contactRouter)
mongoose
   .set("strictQuery", false)
   .connect(db_url)
   .catch((err) => console.log(err))
   .then(app.listen(port))
   .then(() => console.log("server work"))
