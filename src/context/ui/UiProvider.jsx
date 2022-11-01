import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { UiContext } from './'

export const UiProvider = ({ children }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isPetModalOpen, setIsPetModalOpen] = useState(false)
  const [showSwipeView, setShowSwipeView] = useState(true)
  const { toggleTheme, isDark } = useTheme()

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

  const toggleSwipeView = () => {
    setShowSwipeView(true)
  }

  const toggleMessagesView = () => {
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

      toggleMessagesView,
      toggleSwipeView,
      toggleTheme,
      isDark
    }}>
      { children }
    </UiContext.Provider>
  )
}
