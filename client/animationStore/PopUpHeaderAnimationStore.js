import { makeAutoObservable } from "mobx"

class PopUpHeaderAnimationStore {
   anchorActive = {
      animate: { scale: [1.3, 1], transition: { type: "spring", duration: 0.3, times: [0.5, 0.5] } },
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new PopUpHeaderAnimationStore()
