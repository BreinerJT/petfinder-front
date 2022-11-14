import { useMemo, useContext } from 'react'

import { AuthContext } from '../../context/auth'
import { UiContext } from '../../context/ui'
import { SidebarLayout } from '../layout/SidebarLayout'
import { SidebarChatItem, SidebarHeader } from './'

const users = [
  { name: 'Usuario Uno', online: true },
  { name: 'Usuario Dos', online: false },
  { name: 'Usuario Tres', online: true },
  { name: 'Usuario Cuatro', online: false },
  { name: 'Usuario Cinco', online: true }
]

export const Sidebar = () => {
  const { showSwipeView, toggleSwipeView, toggleMessagesView } = useContext(UiContext)
  const { liked } = useContext(AuthContext)

  const likes = useMemo(() => {
    const likes = structuredClone(liked)
    return likes.slice(0, 15)
  }, [liked])

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
          ? (
              <div className='flex flex-wrap justify-center items-center gap-1 gap-y-2 p-4'>
                {
                  likes.map((like, index) => (
                    <div
                      className='cursor-pointer rounded-md h-20 w-24 select-none bg-cover'
                      key={index}
                      style={{ backgroundImage: `url('${like.photos[0]}')` }}
                    />
                  ))
                }
              </div>
            )
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
