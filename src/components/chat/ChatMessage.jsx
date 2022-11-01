import { IncomingMessage, OutcomingMessage, SendMessage } from './'

export const ChatMessage = () => {
  return (
    <>
      <div className='grid px-4 pt-6 overflow-y-auto h-[90%] scrollbar-thumb-blue-500 dark:scrollbar-thumb-white dark:scrollbar-track-black scrollbar-track-slate-300 scrollbar-thin scrollbar-thumb-rounded'>
        <IncomingMessage />
        <IncomingMessage />
        <OutcomingMessage />
        <OutcomingMessage />
        <IncomingMessage />
        <IncomingMessage />
        <OutcomingMessage />
        <OutcomingMessage />
        <IncomingMessage />
        <IncomingMessage />
        <OutcomingMessage />
        <OutcomingMessage />
      </div>
      <SendMessage />
    </>
  )
}
