import { Suspense, lazy, useContext } from 'react'

import TinderCard from 'react-tinder-card'

import { PetContext } from '../../context/pet'
import { useTinderCard } from '../../hooks'
const SwipeCard = lazy(() => import('../ui/SwipeCard'))

export const SwipeView = () => {
  const { allPets } = useContext(PetContext)
  const { swiped } = useTinderCard()
  const hasNoPets = allPets.length === 0

  if (hasNoPets) {
    return (
      <div className='h-full w-full'>
        <div className='flex items-center h-full w-full text-center'>
          <h2 className='text-2xl text-black dark:text-slate-300 bg-white dark:bg-slate-800  py-4 w-full'>
            Aun no hay mascota nuevas.
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className='h-full overflow-hidden relative flex justify-center items-center'>
      <div className='w-[260px] h-80'>
        {
          allPets.map(mascota => (
            <TinderCard
              className='absolute'
              key={ mascota.id }
              onSwipe={ (dir) => swiped(dir, mascota.id) }
              preventSwipe={ ['down', 'up'] }
            >
              <Suspense fallback={ <div className='w-[260px] h-80 bg-slate-900 rounded-2xl' /> }>
                <SwipeCard mascota={ mascota } />
              </Suspense>
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
    </div>
  )
}
