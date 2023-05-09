import mongoose, { Schema } from "mongoose"
const importantInfoSchema = new Schema({
   text: { type: String },
})
const importantInfo = mongoose.model("importantInfo", importantInfoSchema, "importantInfo")
export default importantInfo
