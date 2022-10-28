import { createRef, useMemo } from 'react'
import TinderCard from 'react-tinder-card'

const nombres = [
  {
    photos: [],
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: [],
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: [],
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: [],
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: [],
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  },
  {
    photos: [],
    name: 'Princesa',
    age: '7 años',
    description: 'French puddle blanca orejona'
  }
]

export const HomePage = () => {
  const childRefs = useMemo(
    () =>
      Array(nombres.length)
        .fill(0)
        .map((i) => createRef()),
    []
  )
  console.log(childRefs)

  return (
    <div className='overflow-hidden min-h-screen bg-gradient-to-br from-red-300 via-pink-400 to-red-300 grid items-center justify-center'>
      <div className='grid w-11/12 max-w-[260px] h-[300px]'>
        {
          nombres.map((nombre, index) => (
            <TinderCard
              className='absolute'
              key={index}
              preventSwipe={['down', 'up']}
            >
              <h1 className='relative bg-pink-900 w-[80vw] max-w-[260px] h-80 rounded-2xl rounded-b-none bg-cover bg-center borrar grid items-center text-center text-white text-6xl font-bold'>{ index + 1 }</h1>
              <div className='bg-white p-2 rounded-2xl rounded-t-none'>
                <p className='flex gap-2 items-end font-bold text-2xl'>{ nombre.name }<span className='font-normal text-xl'>{ nombre.age }</span></p>
                <p className='text-sm'>{ nombre.description }</p>
              </div>
            </TinderCard>
          ))
        }
      </div>
      <div className='flex gap-4 justify-center'>
        <button className='bg-white rounded-full'>back</button>
        <button className='bg-white rounded-full'>nope</button>
        <button className='bg-white rounded-full'>love</button>
      </div>
    </div>
  )
}
