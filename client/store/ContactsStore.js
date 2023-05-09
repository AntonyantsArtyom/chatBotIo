const { makeAutoObservable } = require("mobx")

class ContactsStore {
   head = `Контакты`
   phone = `8-955-9555-955`
   address = `Томск, Фролово 70`
   additionalText = ""
   additionalTextVariants = {
      big: `не хотите писать почту -
просто позвоните нам или
зайдите к нам в офис`,
      little: `не хотите писать почту - просто позвоните
нам или зайдите к нам в офис`,
   }
   setAdditionalText(value) {
      this.additionalText = value
   }
   setAdress(value) {
      this.address = value
   }
   setPhone(value) {
      this.phone = value
   }
   constructor() {
      makeAutoObservable(this)
   }
}

export default new ContactsStore()
