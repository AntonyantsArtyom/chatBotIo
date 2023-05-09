import { useEffect, useState } from "react"
import Contacts from "../components/Contacts/Contacts"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Capabilities from "../components/Сapabilities/Сapabilities"
import PopUpHeader from "../components/Header/PopUpHeader"
import { observer } from "mobx-react-lite"
import IndexAnimationStore from "../animationStore/IndexAnimationStore"
import { AnimatePresence } from "framer-motion"
import ScrollWatcher from "../windowWatchers/WindowScrollWatcher"
import HeaderStore from "../store/HeaderStore"
import HeaderAnimationStore from "../animationStore/HeaderAnimationStore"
import PopUpBlock from "../components/UI/PopUpBlock/PopUpBlock"
import GlobalStore from "../store/GlobalStore"
import messageToCustomersAPI from "../API/messageToCustomersAPI"
import contactAPI from "../API/contactAPI"

const Index = () => {
   const [shopPopUpHeader, setShowPopUpHeader] = useState(false)
   const [shopPopUpBlock, setShowPopUpBlock] = useState(true)
   useEffect(() => {
      const popUpHeaderScrollWatcher = new ScrollWatcher(
         [
            [0, 150],
            [150, 2000],
         ],
         [() => setShowPopUpHeader(false), () => setShowPopUpHeader(true)],
         () => {}
      )
      const activeAchorScrollWatcher = new ScrollWatcher(
         [
            [0, 450],
            [450, 810],
            [810, 2000],
         ],
         [
            () => HeaderStore.setAnshorActive(0),
            () => HeaderStore.setAnshorActive(1),
            () => HeaderStore.setAnshorActive(2),
         ],
         () => HeaderAnimationStore.clearAnimations()
      )
   }, [])
   return (
      <>
         <style jsx global>
            {`
               * {
                  margin: 0px;
                  padding: 0px;
                  box-sizing: border-box;
                  cursor: default;
               }
               body {
                  background: linear-gradient(149.76deg, #0e0e2c 2.05%, #02020c 108.04%);
                  mix-blend-mode: normal;
                  overflow-x: hidden;
               }
            `}
         </style>
         <Header />
         <AnimatePresence>
            {shopPopUpHeader && (
               <PopUpHeader
                  initial={IndexAnimationStore.popUpHeader.initial}
                  animate={IndexAnimationStore.popUpHeader.animate}
                  exit={IndexAnimationStore.popUpHeader.exit}
               />
            )}
         </AnimatePresence>
         <AnimatePresence>
            {GlobalStore.popUpBlockText != "" && shopPopUpBlock && (
               <PopUpBlock
                  onCloseClick={() => setShowPopUpBlock(false)}
                  initial={IndexAnimationStore.popUpBlock.initial}
                  animate={IndexAnimationStore.popUpBlock.animate}
                  exit={IndexAnimationStore.popUpBlock.exit}
               >
                  {GlobalStore.popUpBlockText || popUpBlockTextSSR}
               </PopUpBlock>
            )}
         </AnimatePresence>
         <Main />
         <Capabilities />
         <Contacts />
      </>
   )
}

export async function getServerSideProps() {
   let text = ""
   let contacts = {}
   await messageToCustomersAPI.getMessageToCustomers((res) => (text = res.data))
   await contactAPI.getContacts((res) => (contacts = res.data))
   return {
      props: {
         popUpBlockText: text || "",
         phone: contacts.phone || "телефон не получен",
         adress: contacts.adress || "адрес не получен",
      },
   }
}
export default observer(Index)
