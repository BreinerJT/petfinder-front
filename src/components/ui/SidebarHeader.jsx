import { Link } from 'react-router-dom'
import { Menu } from './'

export const SidebarHeader = () => {
  return (
    <div className="flex items-center p-4 justify-between">
      <Link to='/profile' className='flex gap-4 items-center text-xl font-bold dark:text-slate-300'>
        <div className="w-10 h-10 rounded-full bg-slate-400" />
        Soy un Usuario
      </Link>
      <Menu />
    </div>
  )
}
