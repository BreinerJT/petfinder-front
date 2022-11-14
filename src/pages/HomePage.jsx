import { useContext, useEffect } from 'react'

import { UiContext } from '../context/ui'
import { MatchView, Sidebar } from '../components/ui'
import { ChatMessage } from '../components/chat'

import { AuthContext } from '../context/auth'

export const HomePage = () => {
  const { showSwipeView } = useContext(UiContext)
  const { getLikedPets } = useContext(AuthContext)

  useEffect(() => {
    getLikedPets()
  }, [])

  return (
  <>
    <div className='flex'>
      <Sidebar />
      <div className='w-3/4 bg-gray-100 dark:bg-black h-screen'>
        {
          showSwipeView
            ? <MatchView />
            : <ChatMessage />
        }
      </div>
    </div>
  </>
  )
}
