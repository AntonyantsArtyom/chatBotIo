import { makeAutoObservable } from "mobx"

class IndexAnimationStore {
   popUpHeader = {
      initial: { opacity: 0 },
      animate: {
         opacity: 100,
         transition: { type: "linear", duration: 0.3, opacity: { duration: 0.1 }, delay: 0 },
      },
      exit: {
         opacity: 0,
         transition: { type: "linear", duration: 0.1, opacity: { duration: 0.1 }, delay: 0 },
      },
   }
   popUpBlock = {
      initial: { scale: 0, rotate: -90 },
      animate: {
         opacity: 100,
         x: 0,
         scale: 1,
         rotate: 0,
         y: 0,
         transition: { duration: 0.25, opacity: { duration: 0.2 }, delay: 3 },
      },
      exit: {
         scale: 0,
         rotate: 90,
         x: 50,
         y: 200,
         transition: { duration: 0.25 },
      },
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new IndexAnimationStore()
