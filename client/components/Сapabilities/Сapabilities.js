import classes from "./Сapabilities.module.css"
import { v4 as uuidv4 } from "uuid"
import { useEffect } from "react"
import CapabilitiesStore from "../../store/CapabilitiesStore"
import Capabilitie from "./Capabilitie/Capabilitie"
import WidthWatcher from "../../windowWatchers/WindowWidthWatcher"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import CapabilitiesAnimationStore from "../../animationStore/CapabilitiesAnimationStore"
import { observer } from "mobx-react-lite"
import { motion } from "framer-motion"

CapabilitiesStore.setCapabilities(CapabilitiesStore.capabilitiesVariants.big)
const Capabilities = () => {
   useEffect(() => {
      const WindowWatcherCapabilities = new WidthWatcher(
         [
            [0, 710],
            [710, 750],
            [750, 2000],
         ],
         [
            () => CapabilitiesStore.setCapabilities(CapabilitiesStore.capabilitiesVariants.small),
            () => CapabilitiesStore.setCapabilities(CapabilitiesStore.capabilitiesVariants.middle),
            () => CapabilitiesStore.setCapabilities(CapabilitiesStore.capabilitiesVariants.big),
         ],
         () => CapabilitiesAnimationStore.clearAnimations()
      )
      useIntersectionObserver(document.querySelector(`.${classes.intersectionObserverElement}`), () => {
         CapabilitiesAnimationStore.setShouldStart(true)
      })
   }, [])
   return (
      <div className={classes.capabilities}>
         <div className={classes.intersectionObserverElement} />
         <motion.h1
            initial={CapabilitiesAnimationStore.head.initial}
            animate={
               CapabilitiesAnimationStore.shouldStart
                  ? CapabilitiesAnimationStore.head.animate
                  : CapabilitiesAnimationStore.head.initial
            }
            className={classes.head}
         >
            {CapabilitiesStore.head}
         </motion.h1>
         <div className={classes.capabilitiesGroup}>
            {CapabilitiesStore.capabilities.map((capabilitie, index) => (
               <Capabilitie
                  initial={CapabilitiesAnimationStore.capabilities[index].initial}
                  animate={
                     CapabilitiesAnimationStore.shouldStart
                        ? CapabilitiesAnimationStore.capabilities[index].animate
                        : CapabilitiesAnimationStore.capabilities[index].initial
                  }
                  key={uuidv4()}
                  className={index == CapabilitiesStore.capabilities.length - 1 ? classes.lastCapabilitie : ""}
               >
                  {capabilitie}
               </Capabilitie>
            ))}
         </div>
      </div>
   )
}

export default observer(Capabilities)
