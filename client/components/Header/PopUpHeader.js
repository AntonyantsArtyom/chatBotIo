import classes from "./PopUpHeader.module.css"
import { v4 as uuidv4 } from "uuid"
import HeaderStore from "../../store/HeaderStore"
import Anchor from "./Anchor/Anchor"
import { observer } from "mobx-react-lite"
import { motion } from "framer-motion"
import PopUpHeaderAnimationStore from "../../animationStore/PopUpHeaderAnimationStore"
const PopUpHeader = (animationProps) => {
   return (
      <motion.div {...animationProps} className={classes.container}>
         <div className={classes.header}>
            <nav className={classes.nav}>
               {HeaderStore.anchors.map((anchor) => (
                  <Anchor
                     onClick={() => window.scrollTo({ top: anchor.scroll, behavior: "smooth" })}
                     animate={anchor.active && PopUpHeaderAnimationStore.anchorActive.animate}
                     anchor={anchor}
                     key={uuidv4()}
                  />
               ))}
            </nav>
         </div>
      </motion.div>
   )
}

export default observer(PopUpHeader)
