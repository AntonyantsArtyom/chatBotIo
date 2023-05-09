const { makeAutoObservable } = require("mobx")

class HeaderStore {
   anchorTexts = {
      big: ["главная", "возможности чат-бота", "контакты"],
      small: ["главная", "возможности бота", "контакты"],
   }
   anchorScrolls = {
      big: [0, 800, 1000],
      small: [0, 600, 1000],
   }
   anchors = [
      { text: "", active: 1, scroll: 0 },
      { text: "", active: 0, scroll: 600 },
      { text: "", active: 0, scroll: 1000 },
   ]
   setAnshorsText(values) {
      this.anchors.forEach((anchor, index) => (anchor.text = values[index]))
      this.anchors = [...this.anchors]
   }
   setAnshorScrolls(values) {
      this.anchors.forEach((anchor, index) => (anchor.scroll = values[index]))
      this.anchors = [...this.anchors]
   }
   setAnshorActive(index) {
      this.anchors.forEach((anchor) => (anchor.active = 0))
      this.anchors[index].active = 1
      this.anchors = [...this.anchors]
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new HeaderStore()
