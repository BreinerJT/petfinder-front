import { useContext } from 'react'

import { ChatContext } from '../../context/chat'
import { scrollToBottom } from '../../helpers'
import { types } from '../../types/types'

export const SidebarChatItem = ({ usuario }) => {
  const { dispatch, getMessages, chatActivo } = useContext(ChatContext)

  const onClick = async () => {
    dispatch({
      type: types.activarChat,
      payload: usuario.id
    })

    const resp = await getMessages(usuario.id)
    if (resp.ok) {
      dispatch({
        type: types.cargarMensajes,
        payload: resp.messages
      })
    }
    scrollToBottom('mensajes')
  }

  return (
    <div onClick={ onClick } className={`flex gap-4 items-center border-b border-gray-400 cursor-pointer p-4 ${chatActivo === usuario.id ? 'bg-gray-300 dark:bg-gray-900' : 'bg-inherit'}`}>
      <div className='overflow-hidden clear-both'>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: usuario.photoUrl ? `url('${usuario.photoUrl}')` : "url('./profile.jpg')" }} />
          <span className={`top-0 left-6 absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${usuario.online ? 'bg-green-400' : 'bg-red-400'}`} />
        </div>
      </div>
      <div>
        <p className='text-base font-medium capitalize dark:text-slate-300'>{ usuario.name }</p>
      </div>
    </div>
  )
}
