import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { UiContext } from './'

export const UiProvider = ({ children }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isPetModalOpen, setIsPetModalOpen] = useState(false)
  const [showSwipeView, setShowSwipeView] = useState(true)
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
    setShowSwipeView(true)
  }

  const setMessagesView = () => {
    setShowSwipeView(false)
  }

  return (
    <UiContext.Provider value={{
      isRegisterModalOpen,
      showSwipeView,
      isPetModalOpen,

      closeRegisterModal,
      openRegisterModal,

      closePetModal,
      openPetModal,

      setSwipeView,
      setMessagesView,

      toggleTheme,
      setDarkTheme,
      setLightTheme,
      isDark
    }}>
      { children }
    </UiContext.Provider>
  )
}
