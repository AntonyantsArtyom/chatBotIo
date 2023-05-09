import { forwardRef } from "react"
import classes from "./DataInput.module.css"
import { motion } from "framer-motion"

const DataInput = forwardRef(({ buttonText, className, onSend, ...props }, ref) => {
   return (
      <div ref={ref} {...props} className={`${className} ${classes.input}`}>
         <input onKeyUp={(event) => event.key == "Enter" && onSend()} />
         <button onClick={onSend}>{buttonText}</button>
      </div>
   )
})
export default motion(DataInput)
