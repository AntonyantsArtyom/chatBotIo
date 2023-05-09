import adress from "../../image/address.png"
import phone from "../../image/phone.png"
import image from "../../image/contacts.png"
import classes from "./Contacts.module.css"
import ContactsStore from "../../store/ContactsStore"
import WidthWatcher from "../../windowWatchers/WindowWidthWatcher"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import ContactsAnimationStore from "../../animationStore/ContactsAnimationStore"
import { motion } from "framer-motion"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
ContactsStore.setAdditionalText(ContactsStore.additionalTextVariants.big)
const Contacts = () => {
   useEffect(() => {
      const WindowWatcherContacts = new WidthWatcher(
         [
            [0, 900],
            [900, 2000],
         ],
         [
            () => ContactsStore.setAdditionalText(ContactsStore.additionalTextVariants.little),
            () => ContactsStore.setAdditionalText(ContactsStore.additionalTextVariants.big),
         ],
         () => ContactsAnimationStore.clearAnimations()
      )
      useIntersectionObserver(document.querySelector(`.${classes.intersectionObserverElement}`), () => {
         ContactsAnimationStore.setShouldStart(true)
      })
   }, [])
   return (
      <div className={classes.contacts}>
         <div className={classes.intersectionObserverElement}>HELLO</div>
         <div className={classes.headArea}>
            <motion.h2
               initial={ContactsAnimationStore.head.initial}
               animate={
                  ContactsAnimationStore.shouldStart
                     ? ContactsAnimationStore.head.animate
                     : ContactsAnimationStore.head.initial
               }
               className={classes.head}
            >
               {ContactsStore.head}
            </motion.h2>
            <motion.p
               initial={ContactsAnimationStore.additional.initial}
               animate={
                  ContactsAnimationStore.shouldStart
                     ? ContactsAnimationStore.additional.animate
                     : ContactsAnimationStore.additional.initial
               }
               className={classes.additional}
            >
               {ContactsStore.additionalText}
            </motion.p>
         </div>
         <div className={classes.dataArea}>
            <motion.address
               initial={ContactsAnimationStore.phone.initial}
               animate={
                  ContactsAnimationStore.shouldStart
                     ? ContactsAnimationStore.phone.animate
                     : ContactsAnimationStore.phone.initial
               }
               className={classes.data}
            >
               <img src={phone.src} />
               <p>{ContactsStore.phone}</p>
            </motion.address>
            <motion.address
               initial={ContactsAnimationStore.adress.initial}
               animate={
                  ContactsAnimationStore.shouldStart
                     ? ContactsAnimationStore.adress.animate
                     : ContactsAnimationStore.adress.initial
               }
               className={classes.data}
            >
               <img src={adress.src} />
               <p>{ContactsStore.address}</p>
            </motion.address>
         </div>
         <div className={classes.imageArea}>
            <motion.img
               initial={ContactsAnimationStore.image.initial}
               animate={
                  ContactsAnimationStore.shouldStart
                     ? ContactsAnimationStore.image.animate
                     : ContactsAnimationStore.image.initial
               }
               src={image.src}
            />
            <motion.div
               initial={ContactsAnimationStore.backgroundBlur.initial}
               animate={
                  ContactsAnimationStore.shouldStart
                     ? ContactsAnimationStore.backgroundBlur.animate
                     : ContactsAnimationStore.backgroundBlur.initial
               }
            />
         </div>
      </div>
   )
}

export default observer(Contacts)
