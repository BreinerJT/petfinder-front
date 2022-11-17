import { useEffect, useMemo, useContext } from 'react'

import { AuthContext } from '../../context/auth'

export const LikedPetItemList = () => {
  const { liked, getLikedPets } = useContext(AuthContext)

  const likes = useMemo(() => {
    const likes = structuredClone(liked)
    return likes.slice(0, 15)
  }, [liked])

  useEffect(() => {
    getLikedPets()
  }, [])

  return (
    <div className='flex flex-wrap justify-center items-center gap-1 gap-y-2 p-4'>
      {
        likes.length === 0
          ? <div className='h-96 flex flex-wrap items-center text-center'>
              <p className='dark:text-slate-300 text-2xl font-semibold grid gap-4'>
                Aqui apareceran los peludos que te gustaron recientemente.
                <span>
                  Al presionar su foto podras contactarte con la persona.
                </span>
              </p>
            </div>
          : likes.map((like, index) => (
            <div
              className='cursor-pointer rounded-md h-20 w-24 select-none bg-cover'
              key={index}
              style={{ backgroundImage: `url('${like.photos[0]}')` }}
            />
          ))
      }
    </div>
  )
}
