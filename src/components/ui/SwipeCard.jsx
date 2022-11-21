
const SwipeCard = ({ mascota }) => {
  return (
    <div className='relative w-[260px] h-80 rounded-2xl bg-cover bg-center select-none overflow-hidden'>
      <img className='w-full h-full object-cover' src={ mascota.photos[0] } alt="photo" loading='lazy' />
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
  )
}

export default SwipeCard