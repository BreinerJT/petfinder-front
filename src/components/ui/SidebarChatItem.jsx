
export const SidebarChatItem = ({ user }) => {
  return (
    <div className='flex gap-4 items-center border-b border-gray-400 cursor-pointer p-4'>
      <div className='overflow-hidden clear-both'>
        <div className="relative">
            <img className="w-10 h-10 rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="photo" />
            <span className={`top-0 left-6 absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${user.online ? 'bg-green-400' : 'bg-red-400'}`} />
        </div>
      </div>
      <div>
        <p className='text-base font-medium capitalize dark:text-slate-300'>{ user.name }</p>
      </div>
    </div>
  )
}
