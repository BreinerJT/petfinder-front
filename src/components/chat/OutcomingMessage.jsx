import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { formatDate } from '../../helpers'

export const OutcomingMessage = ({ msg }) => {
  const { photoUrl } = useContext(AuthContext)
  const { mensaje, createdAt } = msg

  return (
    <div className="place-self-end mb-4">
      <div className="text-end">
        <p className="font-medium text-sm text-gray-500 dark:text-white pb-1">{ formatDate(createdAt) }</p>
      </div>
      <div className="flex gap-2 items-center justify-end">
        <div className="bg-blue-500 dark:bg-stone-800 dark:bg-opacity-80 rounded-2xl p-2 break-words max-w-sm">
          <p className="text-white font-medium">
            { mensaje }
          </p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: photoUrl ? `url('${photoUrl}')` : "url('./profile.jpg')" }} />
        </div>
      </div>
    </div>
  )
}
