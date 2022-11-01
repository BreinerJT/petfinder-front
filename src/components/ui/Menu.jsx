import { useContext, useState } from 'react'
import { UiContext } from '../../context/ui'

export const Menu = () => {
  const { openPetModal, toggleTheme, isDark } = useContext(UiContext)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='relative'>
      <button
        aria-label='Dropdown'
        className={`inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 ${showMenu ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-800'}`}
        onClick={() => setShowMenu(!showMenu)}
        type="button"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
      </button>

    <div className={`absolute right-4 top-12 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${showMenu ? 'block' : 'hidden'}`}>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li onBlur={ () => setShowMenu(false) }>
          <button onClick={ openPetModal } className="text-start w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Agregar Mascota</button>
        </li>
        <li onBlur={ () => setShowMenu(false) }>
          <button
            className="flex items-center justify-between text-start w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={ toggleTheme }
            type="button"
          >
            Tema actual:
            { isDark
              ? <svg className='w-6 h-6' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              : <svg className='w-6 h-6' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            }
          </button>
        </li>
      </ul>
      <div className="py-1">
        <button className="w-full text-start py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-red-500 dark:hover:text-red-500">Salir</button>
      </div>
    </div>
  </div>
  )
}
