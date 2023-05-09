import { forwardRef } from "react"
import classes from "./Capabilitie.module.css"
import { motion } from "framer-motion"

const Capabilitie = forwardRef(({ children, className, style }, ref) => {
   return (
      <div ref={ref} className={`${classes.capabilitie} ${className}`}>
         <img className={classes.image} src={children.img.src} />
         <h2 className={classes.head}>{children.head}</h2>
         <p className={classes.text}>{children.text}</p>
      </div>
   )
})

export default motion(Capabilitie)
