
export const SidebarLayout = ({ children }) => {
  return (
    <div
      className='w-1/4 h-screen overflow-y-auto border-r bg-gray-50 dark:bg-gray-800 scrollbar-thumb-blue-500
      dark:scrollbar-thumb-white dark:scrollbar-track-black scrollbar-track-white
      scrollbar-thin scrollbar-thumb-rounded'
    >
      { children }
    </div>
  )
}
