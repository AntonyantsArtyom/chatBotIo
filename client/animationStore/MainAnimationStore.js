import { makeAutoObservable } from "mobx"

class MainAnimationStore {
   head = {
      initial: { x: -300, y: -15, rotate: 20, opacity: 0 },
      animate: {
         x: 0,
         y: 0,
         rotate: 0,
         opacity: 100,
         transition: { type: "spring", duration: 0.5, opacity: { duration: 0.5 }, delay: 1.5 },
      },
   }
   firstText = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 0.5, y: 0, transition: { delay: 1.6, duration: 0.1 } },
   }
   input = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0, transition: { delay: 1.7, duration: 0.1 } },
   }
   secondText = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 0.5, y: 0, transition: { delay: 1.8, duration: 0.1 } },
   }
   image = {
      initial: { opacity: 0, rotate: -65, y: 90, scale: 0 },
      animate: { opacity: 1, rotate: 0, y: 0, scale: 1, transition: { duration: 0.2, delay: 1 } },
   }
   backgroundBlur = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { delay: 1, duration: 0.3 } },
   }
   statusBlock = {
      initial: { x: -200, opacity: 0 },
      animate: { x: 0, opacity: 100, transition: { duration: 0.15, delay: 0.2, opacity: { duration: 0.1 } } },
      exit: { x: 100, opacity: 0, transition: { duration: 0.075, opacity: { duration: 0.05 } } },
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new MainAnimationStore()
