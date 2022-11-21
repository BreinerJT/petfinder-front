import { useContext, useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/auth'
import { PetContext } from '../context/pet'
import { UiContext } from '../context/ui'

import { PetModal } from '../components/modals'
import { SidebarLayout } from '../components/layout'
import { onUploadFiles } from '../helpers'
import { ChatContext } from '../context/chat'
import { types } from '../types/types'

export const ProfilePage = () => {
  const { logout, name, city, updatePhotoUrl, photoUrl, uid } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)
  const { getOwnPets, myPets, cleanPets } = useContext(PetContext)
  const { openPetModal, toggleTheme, isDark, setDefaultView } = useContext(UiContext)

  const pets = useMemo(() => {
    const pets = structuredClone(myPets)
    return pets
  }, [myPets])

  const fileInputRef = useRef()

  const onChangePhoto = async ({ target }) => {
    if (target.files === 0) return
    const photo = await onUploadFiles(target.files)
    updatePhotoUrl(uid, photo[0])
  }

  const onLogout = () => {
    logout()
    cleanPets()
    setDefaultView()
    dispatch({ type: types.limpiarMensajes })
  }

  useEffect(() => {
    getOwnPets()
  }, [])

  return (
  <>
    <div className='flex'>
      <SidebarLayout>
        <div className='grid gap-2 justify-center py-8'>
          <div
            onClick={ () => fileInputRef.current.click() }
            className='relative w-[260px] h-80 rounded-2xl bg-cover bg-center cursor-pointer [&:hover>p]:opacity-100'
            style={{ backgroundImage: photoUrl ? `url('${photoUrl}')` : "url('./profile.jpg')" }}
          >
            <p className='w-full h-full flex items-center justify-center rounded-2xl absolute bottom-0 p-2 text-xl bg-black bg-opacity-30 text-white opacity-0 transition-opacity'>Cambiar foto</p>
          </div>
          <input ref={fileInputRef} onChange={ onChangePhoto } type="file" hidden />
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
                onClick={ onLogout }
                className="w-full text-start py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </SidebarLayout>
      <div className='text-white w-3/4 bg-gray-100 dark:bg-black h-screen overflow-y-auto text-center scrollbar-thumb-blue-500 dark:scrollbar-thumb-white dark:scrollbar-track-black scrollbar-track-slate-300 scrollbar-thin scrollbar-thumb-rounded'>
        {
          myPets.length === 0
            ? (
              <div className='h-full'>
                <div className='flex items-center h-full text-center'>
                  <h2 className='text-2xl text-black dark:text-slate-300 bg-white dark:bg-slate-800  py-4 w-full'>
                    Aun no has agregado ninguna mascota.
                  </h2>
                </div>
              </div>
              )
            : (
              <>
                <h1 className='font-semibold text-2xl pb-6 pt-8 text-gray-700 dark:text-slate-300'>¡Mis mascotas en adopcion!</h1>
                <div className='flex gap-8 justify-center items-center flex-wrap pb-8'>
                  {
                    pets.map(pet => (
                    <div key={pet.id} className='relative max-w-[260px] h-80 rounded-2xl overflow-hidden'>
                      <div className='w-[260px] h-80 rounded-2xl bg-cover bg-center' style={{ backgroundImage: `url("${pet.photos[0]}")` }} />
                      <div className='text-start absolute bottom-0 px-4 py-1 backdrop-blur-sm bg-black bg-opacity-5 w-full'>
                        <h1 className='font-semmibold text-xl select-none'>{pet.name}</h1>
                      </div>
                    </div>
                    ))
                  }
                </div>
              </>
              )
        }
      </div>
    </div>
    <PetModal />
  </>
  )
}
