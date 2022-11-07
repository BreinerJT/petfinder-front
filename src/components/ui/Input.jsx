import { forwardRef } from 'react'

export const Input = forwardRef(({ label, themed, name, hasErrors, type = 'text', ...props }, ref) => {
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
        className={'bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'}
      />
    </label>
  )
})
