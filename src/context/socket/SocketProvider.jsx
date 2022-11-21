import { useContext, useEffect } from 'react'

import { AuthContext } from '../auth'
import { ChatContext } from '../chat'
import { SocketContext } from './'

import { useSocket } from '../../hooks'
import { socketTypes, types } from '../../types'
import { scrollToBottomAnimated } from '../../helpers'

export const SocketProvider = ({ children }) => {
  const { logged } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(import.meta.env.VITE_BACK_API_URL)

  useEffect(() => {
    if (logged) conectarSocket()
  }, [logged, conectarSocket])

  useEffect(() => {
    if (!logged) desconectarSocket()
  }, [logged, desconectarSocket])

  useEffect(() => {
    socket?.on(socketTypes.listaChats, (usuarios) => {
      dispatch({
        type: types.usuariosCargados,
        payload: usuarios
      })
    })
  }, [socket, dispatch])

  useEffect(() => {
    socket?.on(socketTypes.mensajePersonal, (mensaje) => {
      dispatch({
        type: types.nuevoMensaje,
        payload: mensaje
      })
      scrollToBottomAnimated('mensajes')
    })
  }, [socket, dispatch])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      { children }
    </SocketContext.Provider>
  )
}
