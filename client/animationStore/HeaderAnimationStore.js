import { makeAutoObservable } from "mobx"

class HeaderAnimationStore {
   logo = {
      initial: { x: -300, y: -150, rotate: 50, opacity: 0 },
      animate: {
         x: 0,
         y: 0,
         rotate: 0,
         opacity: 100,
         transition: { type: "spring", duration: 0.6, opacity: { duration: 0.2 }, delay: 0.6 },
      },
   }
   anchors = [
      {
         initial: { x: -300, y: -150, rotate: 90, opacity: 0 },
         animate: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 100,
            transition: { type: "spring", duration: 0.3, opacity: { duration: 0.2 }, delay: 0.3 },
         },
      },
      {
         initial: { x: -300, y: -150, rotate: 120, opacity: 0 },
         animate: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 100,
            transition: { type: "spring", duration: 0.3, opacity: { duration: 0.2 }, delay: 0.2 },
         },
      },
      {
         initial: { x: -200, y: -150, rotate: 240, opacity: 0 },
         animate: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 100,
            transition: { type: "spring", duration: 0.3, opacity: { duration: 0.2 }, delay: 0.1 },
         },
      },
   ]
   clearAnimations() {
      this.anchors = this.anchors.map((animation) => (animation = { initial: {}, animate: {} }))
      this.logo = { initial: {}, animate: {} }
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new HeaderAnimationStore()
