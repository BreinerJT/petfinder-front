import { useContext } from 'react'
import { UiContext } from '../../context/ui'
import { SidebarChatItem, SidebarHeader } from './'

const algo = ['1', '0', '2', '3', '4', '5']

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
    <div className='w-1/4 h-screen overflow-y-auto border-r bg-gray-50 dark:bg-gray-800 scrollbar-thumb-blue-500 dark:scrollbar-thumb-white dark:scrollbar-track-black scrollbar-track-white scrollbar-thin scrollbar-thumb-rounded'>
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
                  algo.map((_, index) => (
                    <img className='cursor-pointer rounded-md h-20 w-24 object-cover select-none' key={index} src={`./images/${index}.jpeg`} alt="da igual" />
                  ))
                }
                {/* <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' />
                <div className='bg-red-900 rounded-md h-20 w-24' /> */}
              </div>
            )
          : (
              users.map(user => (
                <SidebarChatItem key={user} user={ user } />
              ))
            )
      }

      {/* Espacio Extra */}
      <div className='h-20'></div>
    </div>
  )
}
