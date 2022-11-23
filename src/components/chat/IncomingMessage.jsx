import { useMemo, useContext } from 'react'

import { ChatContext } from '../../context/chat'
import { formatDate } from '../../helpers'

export const IncomingMessage = ({ msg }) => {
  const { usuarios } = useContext(ChatContext)
  const { mensaje, createdAt } = msg

  const photo = useMemo(() => {
    const user = usuarios.find(usuario => usuario.id === msg.de)
    return user.photoUrl
  }, [])

  return (
    <div className="mb-4">
      <div className="pl-12">
        <p className="font-medium text-sm text-gray-500 dark:text-white pb-1">{ formatDate(createdAt) }</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: photo ? `url('${photo}')` : "url('./profile.jpg')" }} />
        <div className="bg-white border border-transparent dark:bg-inherit dark:border-white rounded-2xl p-2 break-words max-w-sm">
          <p className="dark:text-white font-medium">
            { mensaje }
          </p>
        </div>
      </div>
    </div>
  )
}
