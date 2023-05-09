class WidthWatcher {
   activeWidth = null
   constructor(sizes, actions, changingAction) {
      this.sizes = sizes
      this.actions = actions
      const setCurrentTipe = (event) => {
         this.sizes.forEach((size, index) => {
            if (window.innerWidth > size[0] && window.innerWidth <= size[1] && this.activeWidth != index) {
               this.activeWidth = index
               this.actions[index]()
               if (event != undefined) changingAction()
            }
         })
      }
      window.addEventListener("load", setCurrentTipe)
      window.addEventListener("resize", setCurrentTipe)
      if (window.performance) setCurrentTipe()
   }
}

export default WidthWatcher
