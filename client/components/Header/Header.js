import classes from "./Header.module.css"
import { v4 as uuidv4 } from "uuid"
import { observer } from "mobx-react-lite"
import HeaderStore from "../../store/HeaderStore"
import Anchor from "./Anchor/Anchor"
import { motion } from "framer-motion"
import WindowWatcher from "../../windowWatchers/WindowWidthWatcher"
import { useEffect } from "react"
import HeaderAnimationStore from "../../animationStore/HeaderAnimationStore"

HeaderStore.setAnshorsText(HeaderStore.anchorTexts.big)
const Header = () => {
   useEffect(() => {
      const WindowWatcherAnchors = new WindowWatcher(
         [
            [0, 600],
            [600, 1150],
            [1150, 3000],
         ],
         [
            () => {
               HeaderStore.setAnshorsText(HeaderStore.anchorTexts.small)
               HeaderStore.setAnshorScrolls(HeaderStore.anchorScrolls.small)
            },
            () => {
               HeaderStore.setAnshorsText(HeaderStore.anchorTexts.big)
               HeaderStore.setAnshorScrolls(HeaderStore.anchorScrolls.small)
            },
            () => {
               HeaderStore.setAnshorsText(HeaderStore.anchorTexts.big)
               HeaderStore.setAnshorScrolls(HeaderStore.anchorScrolls.big)
            },
         ],
         () => {
            HeaderAnimationStore.clearAnimations()
         }
      )
   }, [])
   return (
      <div className={classes.container}>
         <header className={classes.header}>
            <motion.p
               initial={HeaderAnimationStore.logo.initial}
               animate={HeaderAnimationStore.logo.animate}
               className={classes.logo}
            >
               ChatBotIo
            </motion.p>
            <nav className={classes.nav}>
               {HeaderStore.anchors.map((anchor, index) => {
                  return (
                     <Anchor
                        initial={HeaderAnimationStore.anchors[index].initial}
                        animate={HeaderAnimationStore.anchors[index].animate}
                        onClick={() => window.scrollTo({ top: anchor.scroll, behavior: "smooth" })}
                        anchor={anchor}
                        key={uuidv4()}
                     />
                  )
               })}
            </nav>
         </header>
      </div>
   )
}

export default observer(Header)
