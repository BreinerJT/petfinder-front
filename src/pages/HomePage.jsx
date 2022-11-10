import { useContext } from 'react'

import { UiContext } from '../context/ui'
import { MatchView, Sidebar } from '../components/ui'
import { ChatMessage } from '../components/chat'

export const HomePage = () => {
  const { showSwipeView } = useContext(UiContext)
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
