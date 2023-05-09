import mongoose, { Schema } from "mongoose"
const contactDataSchema = new Schema({
   phone: { type: String },
   adress: { type: String },
})
const contactData = mongoose.model("contactData", contactDataSchema, "contactData")
export default contactData
