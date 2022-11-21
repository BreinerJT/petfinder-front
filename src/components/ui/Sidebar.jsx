import { useContext } from 'react'

import { UiContext } from '../../context/ui'

import { SidebarLayout } from '../layout'
import { SidebarChatItemsList } from '../chat'
import { LikedPetItemList, SidebarHeader } from './'

export const Sidebar = () => {
  const { showSwipeView, toggleSwipeView, toggleMessagesView } = useContext(UiContext)

  return (
    <SidebarLayout>
      <SidebarHeader />
      <div className='flex gap-4 pl-4'>
        <button
          onClick={ toggleSwipeView }
          className={`text-slate-900 dark:text-slate-300 font-medium border-b-2 ${showSwipeView ? 'dark:border-white border-black' : 'border-transparent'}`}
        >
          ¡Me gusta!
        </button>
        <button
          onClick={ toggleMessagesView }
          className={`text-slate-900 dark:text-slate-300 font-medium border-b-2 ${showSwipeView ? 'border-transparent' : 'dark:border-white border-black'}`}
        >
          Mensajes
        </button>
      </div>
      {
        showSwipeView
          ? <LikedPetItemList />
          : <SidebarChatItemsList />
      }
      {/* Espacio Extra */}
      <div className='h-20'></div>
    </SidebarLayout>
  )
}
