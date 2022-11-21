import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { UiContext } from './'

export const UiProvider = ({ children }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isPetModalOpen, setIsPetModalOpen] = useState(false)
  const [view, setView] = useState(null)
  const { toggleTheme, isDark, setDarkTheme, setLightTheme } = useTheme()

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false)
  }

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true)
  }

  const closePetModal = () => {
    setIsPetModalOpen(false)
  }

  const openPetModal = () => {
    setIsPetModalOpen(true)
  }

  const setSwipeView = () => {
    setView('swipe')
  }

  const setMessagesView = () => {
    setView('chat')
  }

  const setDefaultView = () => {
    setView(null)
  }

  return (
    <UiContext.Provider value={{
      isRegisterModalOpen,
      view,
      isPetModalOpen,

      closeRegisterModal,
      openRegisterModal,

      closePetModal,
      openPetModal,

      setSwipeView,
      setMessagesView,
      setDefaultView,

      toggleTheme,
      setDarkTheme,
      setLightTheme,
      isDark
    }}>
      { children }
    </UiContext.Provider>
  )
}
