import classes from "./StatusBlock.module.css"
import loading from "../../../image/loading.png"
import { motion } from "framer-motion"
import { forwardRef } from "react"
const StatusBlock = forwardRef(({ status, children }, ref) => {
   return (
      <div ref={ref} status={status} className={`${classes.statusBlock}`}>
         {status == "finish" && <p>✓</p>}
         {status == "inProcess" && (
            <motion.img
               initial={{ rotate: 0, scale: 0.95 }}
               animate={{ rotate: 360, scale: 1.05 }}
               transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 0 }}
               src={loading.src}
            />
         )}
         {status == "error" && <p>✕</p>}
         <h3>{children}</h3>
      </div>
   )
})

export default motion(StatusBlock)
