import { useReducer } from 'react'
import { messagesApi } from '../../apis'
import { ChatContext, chatReducer } from './'

const initialState = {
  uid: '',
  chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
  usuarios: [], // Todos los usuarios de la base datos
  mensajes: [] // El chat seleccionado
}

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState)

  const getMessages = async (uid) => {
    try {
      const { data } = await messagesApi.get(`/${uid}`)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ChatContext.Provider value={{
      //  Propiedades
      chatState,
      ...chatState,

      //  Metodos
      dispatch,
      getMessages
    }}>
      { children }
    </ChatContext.Provider>
  )
}
