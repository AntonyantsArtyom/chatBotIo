import { makeAutoObservable } from "mobx"

class GlobalStore {
   sendindNewClientMailStatus = 0
   // 0 - почта не в процессе отправки
   // 1 - почта в процессе отправки
   //-1 - ошибка при отправке
   // 2 - почта успешно отправлена на сервер
   setSendindNewClientMailStatus(value) {
      this.sendindNewClientMailStatus = value
   }
   popUpBlockText = null
   setPopUpBlockText(value) {
      this.popUpBlockText = value
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new GlobalStore()
