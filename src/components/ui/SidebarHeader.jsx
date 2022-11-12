import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext'

export const SidebarHeader = () => {
  const { name } = useContext(AuthContext)
  return (
    <div className="flex items-center p-4">
      <Link to='/profile' className='flex gap-4 items-center text-xl font-bold dark:text-slate-300 capitalize'>
        <div className="w-10 h-10 rounded-full bg-slate-400" />
        { name }
      </Link>
    </div>
  )
}
