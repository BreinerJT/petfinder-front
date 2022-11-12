import { PetModal } from '../components/ui'
import { SidebarLayout } from '../components/layout'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UiContext } from '../context/ui'
import { AuthContext } from '../context/auth'

const nombres = [
  {
    photos: 'culebra.jpg',
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: 'perro.jpg',
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: 'gato.jpg',
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: 'fat.jpg',
    name: 'Princesa',
    age: '7 años',
    description: 'perro, perro, perro'
  }
  // {
  //   photos: [],
  //   name: 'Princesa',
  //   age: '7 años',
  //   description: 'French puddle blanca orejona',
  //   uid: ahsdhasdhaoisdhakd
  // }
]

export const ProfilePage = () => {
  const { openPetModal, toggleTheme, isDark } = useContext(UiContext)
  const { logout, name, city } = useContext(AuthContext)

  return (
  <>
    <div className='flex'>
      <SidebarLayout>
        <div className='grid gap-2 justify-center py-8'>
          <div className='w-[260px] h-80 rounded-2xl bg-cover bg-center' style={{ backgroundImage: 'url("./profile.jpg")' }} />
          {/* <img className='max-w-[260px] h-80 rounded-2xl bg-cover bg-center' src="./profile.jpg" alt="yo" /> */}
          <div className='text-gray-700 dark:text-slate-300 text-center'>
            <h2 className='text-xl font-semibold capitalize'>{ name }</h2>
            <h3 className='text-lg font-medium'>{ city }</h3>
          </div>
          <div className='bg-gray-50 dark:bg-gray-800 rounded bg-inherit'>
            <ul className="py-1 text-sm text-gray-700 dark:text-slate-300">
              <li>
                <button onClick={ openPetModal } className="text-start w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Agregar Mascota</button>
              </li>
              <li>
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
            <div className="grid">
              <Link
                to='/'
                className="w-full text-start py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-500 dark:hover:text-blue-500"
              >
                Volver
              </Link>
              <button
                onClick={ logout }
                className="w-full text-start py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </SidebarLayout>
      <div className='p-8 text-white w-3/4 bg-gray-100 dark:bg-black h-screen overflow-y-auto text-center scrollbar-thumb-blue-500 dark:scrollbar-thumb-white dark:scrollbar-track-black scrollbar-track-slate-300 scrollbar-thin scrollbar-thumb-rounded'>
        <h1 className='font-semibold text-2xl pb-6 text-gray-700 dark:text-slate-300'>¡Mis mascotas en adopcion!</h1>
        <div className='flex gap-8 justify-center items-center flex-wrap'>
          {
            nombres.map((mascota, index) => (
              <div key={index} className='relative max-w-[260px] h-80 rounded-2xl overflow-hidden'>
                <div className='w-[260px] h-80 rounded-2xl bg-cover bg-center' style={{ backgroundImage: `url("${mascota.photos}")` }} />
                {/* <img className='w-full h-full object-cover' src={ mascota.photos } alt="photo" /> */}
                <div className='text-start absolute bottom-0 px-4 py-1 backdrop-blur-sm bg-black bg-opacity-5 w-full'>
                  <h1 className='font-semmibold text-xl select-none'>{mascota.name}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <PetModal />
  </>
  )
}
