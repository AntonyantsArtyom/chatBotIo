import classes from "./Anchor.module.css"
import { motion } from "framer-motion"

const Anchor = ({ anchor, onClick, ...animationProps }) => {
   return (
      <motion.a {...animationProps} onClick={onClick} active={anchor.active} className={classes.anchor}>
         {anchor.text}
      </motion.a>
   )
}

export default Anchor
