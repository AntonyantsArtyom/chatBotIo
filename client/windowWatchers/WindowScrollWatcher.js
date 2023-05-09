class ScrollWatcher {
   activeScroll = null
   constructor(scrolls, actions, changingAction) {
      this.scrolls = scrolls
      this.actions = actions
      const setCurrentTipe = () => {
         this.scrolls.forEach((scroll, index) => {
            if (window.pageYOffset > scroll[0] && window.pageYOffset < scroll[1] && this.activeScroll != index) {
               this.activeScroll = index
               this.actions[index]()
               if (event != undefined) changingAction()
            }
         })
      }
      document.addEventListener("scroll", setCurrentTipe)
   }
}

export default ScrollWatcher
