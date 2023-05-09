import { forwardRef } from "react"
import classes from "./PopUpBlock.module.css"
import { motion } from "framer-motion"

const PopUpBlock = forwardRef(({ children, onCloseClick }, ref) => {
   return (
      <div ref={ref} className={classes.popUpBlock}>
         <p className={classes.text}>{children}</p>
         <button onClick={onCloseClick} className={classes.cross}>
            ✕
         </button>
      </div>
   )
})

export default motion(PopUpBlock)
