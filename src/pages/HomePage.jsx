import { useContext } from 'react'

import { UiContext } from '../context/ui'

import { ChatView, SwipeView } from '../components/views'
import { Sidebar } from '../components/ui'

export const HomePage = () => {
  const { showSwipeView } = useContext(UiContext)

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='w-3/4 bg-gray-100 dark:bg-black h-screen'>
          {
            showSwipeView
              ? <SwipeView />
              : <ChatView />
          }
        </div>
      </div>
    </>
  )
}
