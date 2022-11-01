import { Menu } from './'

export const SidebarHeader = () => {
  return (
    <div className="flex items-center p-4 justify-between">
      <div className='flex gap-4 items-center '>
        <div className="w-10 h-10 rounded-full bg-slate-400" />
        <h1 className='text-xl font-bold dark:text-slate-300'>
          Breiner Torres
        </h1>
      </div>
      <Menu />
    </div>
  )
}
