import { makeAutoObservable } from "mobx"

class CapabilitiesAnimationStore {
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
   capabilities = [
      {
         initial: { x: -100, y: 100, rotate: 30, opacity: 0 },
         animate: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 100,
            transition: { type: "spring", duration: 0.3, opacity: { duration: 0.25 }, delay: 0.5 },
         },
      },
      {
         initial: { x: -100, y: 100, rotate: 30, opacity: 0 },
         animate: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 100,
            transition: { type: "spring", duration: 0.3, opacity: { duration: 0.25 }, delay: 0.75 },
         },
      },
      {
         initial: { x: -100, y: 100, rotate: 30, opacity: 0 },
         animate: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 100,
            transition: { type: "spring", duration: 0.3, opacity: { duration: 0.25 }, delay: 1 },
         },
      },
   ]
   setShouldStart(value) {
      this.shouldStart = value
   }
   clearAnimations() {
      this.capabilities = this.capabilities.map((animation) => (animation = { initial: {}, animate: {} }))
      this.head = { initial: {}, animate: {} }
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new CapabilitiesAnimationStore()
