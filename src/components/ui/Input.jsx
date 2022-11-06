import { forwardRef } from 'react'

export const Input = forwardRef(({ label, themed, name, type = 'text', ...props }, ref) => {
  return (
    <label
      className={`grid gap-2 font-medium text-gray-900 ${themed && 'dark:text-white'}`}
    >
      { label }
      <input
        name={name}
        ref={ref}
        type={ type }
        { ...props }
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      />
    </label>
  )
})
