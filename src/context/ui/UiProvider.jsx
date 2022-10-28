import { useState } from "react"
import { UiContext } from "./uiContext"

export const UiProvider = ({ children }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const closeRegisterModal = () => {
    setIsRegisterModalOpen( false )
  }

  const openRegisterModal = () => {
    setIsRegisterModalOpen( true )
  }

  return (
    <UiContext.Provider value={{
      isRegisterModalOpen,
      
      closeRegisterModal,
      openRegisterModal
    }}>
      { children }
    </UiContext.Provider>
  )
}
