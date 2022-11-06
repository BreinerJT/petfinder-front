import { useContext, useState } from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { UiContext } from '../../context/ui'

export const SendMessage = () => {
  const { isDark } = useContext(UiContext)
  const [message, setMessage] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)
  const isInputEmpty = message.length === 0

  const onChange = ({ target }) => {
    const { value } = target
    setMessage(value)
  }

  const setEmoji = (e) => {
    setMessage(curr => curr + e.native)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (isInputEmpty) { return }

    setMessage('')
  }

  return (
    <form onSubmit={ onSubmit } className='h-[10%] flex border border-transparent border-t-black dark:border-t-white'>
      <input
        autoFocus
        className='pl-4 dark:text-slate-300 font-medium h-full bg-inherit flex-1 word-break overflow-y-auto outline-none border-none focus:border-none focus:ring-transparent'
        onChange={ onChange }
        placeholder='Mensaje...'
        type='text'
        value={ message }
      />
      <div className='relative flex gap-4 justify-center items-center px-8'>
        <button
          aria-label='Send message button'
          className={`flex items-center justify-center px-4 py-2 ${isInputEmpty ? 'text-gray-400' : 'text-emerald-500'}`}
          disabled={isInputEmpty}
          type='submit'
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
        <button
          aria-label='Emojis'
          className={`hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full ${!showEmojis ? 'bg-inherit dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={ () => setShowEmojis(!showEmojis) }
        >
          😐
        </button>
        <div className={`absolute bottom-16 right-[72px] ${showEmojis ? 'block' : 'hidden'}`}>
          <Picker
            autoFocus
            data={data}
            icons='auto'
            locale='es'
            onEmojiSelect={ setEmoji }
            previewPosition='none'
            theme={ isDark ? 'dark' : 'light' }
          />
        </div>
      </div>
    </form>
  )
}
