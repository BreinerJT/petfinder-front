import { useContext } from 'react'

import { UiContext } from '../../context/ui'
import { SidebarLayout } from '../layout/SidebarLayout'
import { LikedPetItemList, SidebarChatItem, SidebarHeader } from './'

const users = [
  { name: 'Usuario Uno', online: true },
  { name: 'Usuario Dos', online: false },
  { name: 'Usuario Tres', online: true },
  { name: 'Usuario Cuatro', online: false },
  { name: 'Usuario Cinco', online: true }
]

export const Sidebar = () => {
  const { showSwipeView, toggleSwipeView, toggleMessagesView } = useContext(UiContext)

  return (
    <SidebarLayout>
      <SidebarHeader />
      <div className='flex gap-4 pl-4'>
        <button onClick={ toggleSwipeView } className={`text-slate-900 dark:text-slate-300 font-medium border-b-2 ${showSwipeView ? 'dark:border-white border-black' : 'border-transparent'}`}>
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
          : (
              users.map(user => (
                <SidebarChatItem key={user.name} user={ user } />
              ))
            )
      }
      {/* Espacio Extra */}
      <div className='h-20'></div>
    </SidebarLayout>
  )
}
