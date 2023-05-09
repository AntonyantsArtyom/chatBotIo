import { useEffect } from "react"
import image from "../../image/main.png"
import classes from "./Main.module.css"
import MainStore from "../../store/MainStore"
import DataInput from "../UI/DataInput/DataInput"
import { AnimatePresence, motion } from "framer-motion"
import MainAnimationStore from "../../animationStore/MainAnimationStore"
import WidthWatcher from "../../windowWatchers/WindowWidthWatcher"
import { observer } from "mobx-react-lite"
import GlobalStore from "../../store/GlobalStore"
import StatusBlock from "../UI/StatusBlock/StatusBlock"
import mailSendlerAPI from "../../API/mailSendlerAPI"
import validateEmail from "../../utils/validateEmail"

MainStore.setHeadText(MainStore.headTextVariants.big)
MainStore.setFirstText(MainStore.firstTextVariants.big)

const Main = () => {
   useEffect(() => {
      const WindowWatcherMain = new WidthWatcher(
         [
            [0, 600],
            [600, 850],
            [850, 925],
            [950, 2000],
         ],
         [
            () => {
               MainStore.setHeadText(MainStore.headTextVariants.smallest)
               MainStore.setFirstText(MainStore.firstTextVariants.smallest)
            },
            () => {
               MainStore.setHeadText(MainStore.headTextVariants.little)
               MainStore.setFirstText(MainStore.firstTextVariants.little)
            },
            () => {
               MainStore.setHeadText(MainStore.headTextVariants.middle)
               MainStore.setFirstText(MainStore.firstTextVariants.middle)
            },
            () => {
               MainStore.setHeadText(MainStore.headTextVariants.big)
               MainStore.setFirstText(MainStore.firstTextVariants.big)
            },
         ],
         () => {}
      )
   }, [])
   const onInputButtonClick = () => {
      if (validateEmail(document.querySelector(`.${classes.input} > input`).value) != null) {
         GlobalStore.setSendindNewClientMailStatus(1)
         mailSendlerAPI.sendNewClientMail(
            document.querySelector(`.${classes.input} > input`).value,
            () => GlobalStore.setSendindNewClientMailStatus(2),
            () => GlobalStore.setSendindNewClientMailStatus(-1)
         )
      } else {
         document.querySelector(`.${classes.input} > input`).value = ""
         document.querySelector(`.${classes.input} > input`).placeholder = "некорректный email"
      }
   }
   return (
      <div className={classes.main}>
         <div className={classes.content}>
            <motion.h1
               initial={MainAnimationStore.head.initial}
               animate={MainAnimationStore.head.animate}
               className={classes.head}
            >
               {MainStore.headText}
            </motion.h1>
            <motion.p
               initial={MainAnimationStore.firstText.initial}
               animate={MainAnimationStore.firstText.animate}
               className={classes.text + " " + classes.first}
            >
               {MainStore.firstText}
            </motion.p>
            {GlobalStore.sendindNewClientMailStatus == 0 && (
               <DataInput
                  onSend={onInputButtonClick}
                  initial={MainAnimationStore.input.initial}
                  animate={MainAnimationStore.input.animate}
                  buttonText={MainStore.buttonText}
                  className={classes.input}
               />
            )}
            <AnimatePresence>
               {GlobalStore.sendindNewClientMailStatus == 1 && (
                  <StatusBlock
                     initial={MainAnimationStore.statusBlock.initial}
                     animate={MainAnimationStore.statusBlock.animate}
                     exit={MainAnimationStore.statusBlock.exit}
                     status={"inProcess"}
                  >
                     {MainStore.sendindNewClientMailStatusTexts.process}
                  </StatusBlock>
               )}
            </AnimatePresence>
            {GlobalStore.sendindNewClientMailStatus == 2 && (
               <StatusBlock
                  initial={MainAnimationStore.statusBlock.initial}
                  animate={MainAnimationStore.statusBlock.animate}
                  status={"finish"}
               >
                  {MainStore.sendindNewClientMailStatusTexts.correct}
               </StatusBlock>
            )}
            {GlobalStore.sendindNewClientMailStatus == -1 && (
               <StatusBlock
                  initial={MainAnimationStore.statusBlock.initial}
                  animate={MainAnimationStore.statusBlock.animate}
                  status={"error"}
               >
                  {MainStore.sendindNewClientMailStatusTexts.error}
               </StatusBlock>
            )}

            <motion.p
               initial={MainAnimationStore.secondText.initial}
               animate={MainAnimationStore.secondText.animate}
               className={classes.text + " " + classes.second}
            >
               {MainStore.secondText}
            </motion.p>
         </div>
         <div className={classes.image}>
            <motion.img
               initial={MainAnimationStore.image.initial}
               animate={MainAnimationStore.image.animate}
               src={image.src}
            ></motion.img>
            <motion.div
               initial={MainAnimationStore.backgroundBlur.initial}
               animate={MainAnimationStore.backgroundBlur.animate}
            />
         </div>
      </div>
   )
}
export default observer(Main)
