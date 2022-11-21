import { useContext } from 'react'

import { ChatContext } from '../../context/chat'
import { SidebarChatItem } from './'

export const SidebarChatItemsList = () => {
  const { usuarios } = useContext(ChatContext)
  const hasNoUsers = usuarios.length === 0

  if (hasNoUsers) {
    return (
      <div className='h-[450px] flex items-center justify-center'>
        <p className='dark:text-slate-300 text-2xl font-semibold pt-3'>
          Aun no tienes chats.
        </p>
      </div>
    )
  }

  return (
    usuarios.map(usuario => (
      <SidebarChatItem key={usuario.id} usuario={ usuario } />
    ))
  )
}
