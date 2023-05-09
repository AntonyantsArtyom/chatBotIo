import ContactsStore from "../store/ContactsStore"
import GlobalStore from "../store/GlobalStore"

const App = ({ Component, pageProps }) => {
   typeof pageProps.popUpBlockText != "undefined" && GlobalStore.setPopUpBlockText(pageProps.popUpBlockText)
   typeof pageProps.phone != "undefined" && ContactsStore.setPhone(pageProps.phone)
   typeof pageProps.adress != "undefined" && ContactsStore.setAdress(pageProps.adress)
   return <Component {...pageProps} />
}

export default App
