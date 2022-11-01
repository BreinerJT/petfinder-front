
export const SidebarChatItem = () => {
  return (
    <div className='flex gap-4 items-center border-b border-gray-400 cursor-pointer p-4'>
      <div className='overflow-hidden clear-both'>
        <div className="relative">
            <div className="w-10 h-10 rounded-full bg-red-500" />
            <span className="top-0 left-6 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
        </div>
      </div>
      <div>
        <p className='text-base font-medium capitalize dark:text-slate-300'>Cada palabra se debe capitalizar</p>
      </div>
    </div>
  )
}
