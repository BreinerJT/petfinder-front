import { formatDate } from '../../helpers'

export const IncomingMessage = ({ msg }) => {
  const { mensaje, createdAt } = msg

  return (
    <div className="mb-4">
      <div className="pl-12">
        <p className="font-medium text-sm text-gray-500 dark:text-white pb-1">{ formatDate(createdAt) }</p>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <img className="w-10 h-10 rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="algo" />
        </div>
        {/* <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: photoUrl ? `url('${photoUrl}')` : "url('./profile.jpg')" }} /> */}
        <div className="bg-white border border-transparent dark:bg-inherit dark:border-white rounded-2xl p-2 break-words max-w-sm">
          <p className="dark:text-white font-medium">
            { mensaje }
          </p>
        </div>
      </div>
    </div>
  )
}
