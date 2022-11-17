import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { ChatContext } from '../../context/chat'
import { IncomingMessage, OutcomingMessage, SendMessage } from '../chat'

export const ChatView = () => {
  const { uid } = useContext(AuthContext)
  const { chatActivo, mensajes } = useContext(ChatContext)

  if (!chatActivo) {
    return (
      <div className='h-full'>
        <div className='flex items-center h-full text-center'>
          <h2 className='text-2xl text-slate-300 bg-slate-800 py-4 w-full'>Selecciona un chat</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='grid px-4 pt-6 overflow-y-auto h-[90%] scrollbar-thumb-blue-500 dark:scrollbar-thumb-white dark:scrollbar-track-black scrollbar-track-slate-300 scrollbar-thin scrollbar-thumb-rounded'>
      {
        mensajes.map(msg => (
          msg.para === uid
            ? <IncomingMessage key={ msg.id } msg={ msg } />
            : <OutcomingMessage key={ msg.id } msg={ msg } />
        ))
      }
      </div>
      <SendMessage />
    </>
  )
}
