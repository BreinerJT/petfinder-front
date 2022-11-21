import { useCallback, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { socketTypes } from '../types'

export const useSocket = (serverPath) => {
  const [socket, setSocket] = useState(null)
  const [online, setOnline] = useState(false)

  const conectarSocket = useCallback(() => {
    const token = localStorage.getItem('token')

    const socketTemp = io(serverPath, {
      // autoConnect: true,
      // forceNew: true,
      withCredentials: true,
      query: {
        'x-token': token
      },
      transports: ['websocket']
    })
    setSocket(socketTemp)
  }, [serverPath])

  const desconectarSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])

  useEffect(() => {
    setOnline(socket?.connect())
  }, [socket])

  useEffect(() => {
    socket?.on(socketTypes.conectar, () => setOnline(true))
  }, [socket])

  useEffect(() => {
    socket?.on(socketTypes.desconectar, () => setOnline(false))
  }, [socket])

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket
  }
}
