import { makeAutoObservable } from "mobx"

class ContactsAnimationStore {
   shouldStart = false
   head = {
      initial: { x: -300, y: -15, rotate: 20, opacity: 0 },
      animate: {
         x: 0,
         y: 0,
         rotate: 0,
         opacity: 100,
         transition: { type: "spring", duration: 0.25, opacity: { duration: 0.5 }, delay: 0 },
      },
   }
   additional = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 0.5, y: 0, transition: { delay: 0.15, duration: 0.1 } },
   }
   phone = {
      initial: { opacity: 0, rotate: -35, y: 30, scale: 0 },
      animate: { opacity: 1, rotate: 0, y: 0, scale: 1, transition: { duration: 0.2, delay: 0.25 } },
   }
   adress = {
      initial: { opacity: 0, rotate: -35, y: 30, scale: 0 },
      animate: { opacity: 1, rotate: 0, y: 0, scale: 1, transition: { duration: 0.2, delay: 0.45 } },
   }
   image = {
      initial: { opacity: 0, rotate: -65, y: 90, scale: 0 },
      animate: { opacity: 1, rotate: 0, y: 0, scale: 1, transition: { duration: 0.25, delay: 0.6 } },
   }
   backgroundBlur = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { delay: 0.7, duration: 0.1 } },
   }
   setShouldStart(value) {
      this.shouldStart = value
   }
   clearAnimations() {
      this.head = { initial: {}, animate: {} }
      this.additional = { initial: {}, animate: {} }
      this.phone = { initial: {}, animate: {} }
      this.adress = { initial: {}, animate: {} }
      this.image = { initial: {}, animate: {} }
      this.backgroundBlur = { initial: {}, animate: {} }
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new ContactsAnimationStore()
