import { useContext, useEffect, createRef, useMemo, useRef, useState } from 'react'

import TinderCard from 'react-tinder-card'

import { PetContext } from '../../context/pet'

export const MatchView = () => {
  const { getAllPets, allPets } = useContext(PetContext)
  const [currentIndex, setCurrentIndex] = useState(allPets.length - 1)

  const currentIndexRef = useRef(currentIndex)
  const canGoBack = currentIndex < allPets.length - 1
  const canSwipe = currentIndex >= 0

  const childRefs = useMemo(
    () =>
      Array(allPets.length)
        .fill(0)
        .map((i) => createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const swiped = (direction, nameToDelete, index) => {
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < allPets.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <div className='h-full overflow-hidden relative flex justify-center items-center'>
      {/* <div className='max-w-[260px] h-[300px] relative'> */}
      <div className='w-[260px] h-80'>
        {
          allPets.map((mascota, index) => (
            <TinderCard
              className='absolute'
              key={ index }
              onCardLeftScreen={ () => outOfFrame(mascota.name, index) }
              onSwipe={ (dir) => swiped(dir, mascota.name, index) }
              preventSwipe={ ['down', 'up'] }
              ref={ childRefs[index] }
            >
              <div className='relative w-[260px] h-80 rounded-2xl bg-cover bg-center select-none overflow-hidden'>
                <img className='w-full h-full object-cover' src={ mascota.photos[0] } alt="photo" />
                <div className='absolute bottom-0 p-2'>
                  <h1 className='text-white font-semibold text-xl'>{mascota.name}, <span className='font-normal text-sm'>{mascota.age}</span></h1>
                  <div className='flex gap-1 items-center'>
                    {
                      mascota.description.map((word, index) => (
                        <div key={index} className='rounded-full px-2 py-1 bg-black backdrop-blur-sm bg-opacity-10'>
                          <p className='text-sm text-white capitalize'>{word}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </TinderCard>
          ))
        }
        {/* <div className='relative top-[344px] flex justify-center gap-4'>
          <button
            aria-label='Go back button'
            className={`flex items-center justify-center h-12 w-12 border-2 bg-transparent rounded-full ${canGoBack ? 'border-yellow-500 text-yellow-500' : 'border-zinc-400 text-zinc-500'}`}
            disabled={ !canGoBack }
            onClick={ goBack }
          >
            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
          </button>
          <button
            aria-label='Nope button'
            className={`flex items-center justify-center h-12 w-12 border-2 bg-transparent rounded-full ${canSwipe ? 'border-red-500 text-red-500' : 'border-zinc-400 text-zinc-400'}`}
            disabled={ !canSwipe }
            onClick={ () => swipe('left') }
          >
            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <button
            aria-label='Like button'
            className={`flex items-center justify-center h-12 w-12 border-2 bg-transparent rounded-full ${canSwipe ? 'border-green-500 text-green-500' : 'border-zinc-400 text-zinc-400'}`}
            disabled={ !canSwipe }
            onClick={ () => swipe('right') }
          >
            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div> */}
      </div>
      {/* <div className='max-w-[260px] h-[300px]'>
        {
          nombres.map((mascota, index) => (
            <TinderCard
              ref={ childRefs[index] }
              onCardLeftScreen={ () => outOfFrame(mascota.name, index) }
              className='absolute'
              key={ index }
              onSwipe={ (dir) => swiped(dir, mascota.name, index) }
              preventSwipe={ ['down', 'up'] }
            >
              <div className='relative -translate-x-2/4 w-[80vw] max-w-[260px] h-80 rounded-2xl bg-cover bg-center select-none overflow-hidden'>
                <img className='w-full h-full object-cover' src={ mascota.photos } alt="photo" />
                <div className='absolute bottom-0 p-2'>
                  <h1 className='text-white font-semmibold text-xl'>{mascota.name}, <span className='font-normal text-sm'>{mascota.age}</span></h1>
                  <div className='flex gap-1 items-center'>
                    {
                      mascota.description.map((word, index) => (
                        <div key={index} className='rounded-full px-2 py-1 bg-black backdrop-blur-sm bg-opacity-10'>
                          <p className='text-sm text-white capitalize'>{word}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </TinderCard>
          ))
        }
        <div className='absolute bottom-24 -translate-x-2/4 flex gap-4 justify-center'>
          <button
            aria-label='Go back button'
            className={`flex items-center justify-center h-12 w-12 border-2 bg-transparent rounded-full ${canGoBack ? 'border-yellow-500 text-yellow-500' : 'border-zinc-400 text-zinc-500'}`}
            disabled={ !canGoBack }
            onClick={ goBack }
          >
            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
          </button>
          <button
            aria-label='Nope button'
            className={`flex items-center justify-center h-12 w-12 border-2 bg-transparent rounded-full ${canSwipe ? 'border-red-500 text-red-500' : 'border-zinc-400 text-zinc-400'}`}
            disabled={ !canSwipe }
            onClick={ () => swipe('left') }
          >
            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <button
            aria-label='Like button'
            className={`flex items-center justify-center h-12 w-12 border-2 bg-transparent rounded-full ${canSwipe ? 'border-green-500 text-green-500' : 'border-zinc-400 text-zinc-400'}`}
            disabled={ !canSwipe }
            onClick={ () => swipe('right') }
          >
            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
      </div> */}
    </div>
  )
}
