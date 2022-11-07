import { createRef, useMemo, useRef, useState } from 'react'
import TinderCard from 'react-tinder-card'

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
    description: 'French puddle blanca orejona'
  }
  // {
  //   photos: [],
  //   name: 'Princesa',
  //   age: '7 años',
  //   description: 'French puddle blanca orejona'
  // }
]

export const MatchView = () => {
  const [currentIndex, setCurrentIndex] = useState(nombres.length - 1)

  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(nombres.length)
        .fill(0)
        .map((i) => createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < nombres.length - 1

  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < nombres.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className='grid justify-center items-center h-full overflow-x-hidden'>
      <div className='max-w-[260px] h-[300px]'>
        {
          nombres.map((nombre, index) => (
            <TinderCard
              ref={ childRefs[index] }
              onCardLeftScreen={ () => outOfFrame(nombre.name, index) }
              className='absolute'
              key={ index }
              onSwipe={ (dir) => swiped(dir, nombre.name, index) }
              preventSwipe={ ['down', 'up'] }
            >
              <div className='-translate-x-2/4 w-[80vw] max-w-[260px] h-80 rounded-2xl bg-cover bg-center borrar grid items-center text-center text-white text-6xl font-bold select-none overflow-hidden'>
                <img className='w-full h-full object-cover' src={ nombre.photos } alt="photo" />
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
      </div>
    </div>
  )
}
