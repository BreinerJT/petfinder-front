import { useContext, useCallback, useState } from 'react'

import { authApi } from '../../apis'
import { PetContext } from '../pet'
import { AuthContext } from './AuthContext'

const initialState = {
  checking: true,
  email: null,
  logged: false,
  error: {},
  name: null,
  photoUrl: null,
  uid: null
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)
  const { cleanPets } = useContext(PetContext)

  const login = async ({ email, password }) => {
    try {
      const { data } = await authApi.post('/', { email, password })
      localStorage.setItem('token', data.token)
      setAuth({
        ...auth,
        checking: false,
        city: data.city,
        email: data.email,
        logged: true,
        name: data.name,
        photoUrl: data.photoUrl,
        uid: data.uid
      })
    } catch (error) {
      setAuth({
        ...auth,
        error: { login: error.response.data.msg },
        checking: false
      })
    }
  }

  const register = async ({ city, name, email, password }) => {
    try {
      const { data } = await authApi.post('/new', { city, name, email, password })
      localStorage.setItem('token', data.token)
      setAuth({
        ...auth,
        checking: false,
        city: data.city,
        email: data.email,
        logged: true,
        name: data.name,
        photoUrl: data.photoUrl,
        uid: data.uid
      })
      return true
    } catch (error) {
      setAuth({
        ...auth,
        error: { register: error.response.data.msg },
        checking: false
      })
    }
  }

  const verificarToken = useCallback(async () => {
    onChecking()
    const token = localStorage.getItem('token')
    if (!token) {
      logout()
      return false
    }

    const { data } = await authApi.get('/renew')
    if (data.ok) {
      localStorage.setItem('token', data.token)
      const { city, email, name, photoUrl, uid } = data
      setAuth({
        ...auth,
        checking: false,
        city,
        email,
        logged: true,
        name,
        photoUrl,
        uid
      })
    } else {
      logout()
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    cleanPets()
    setAuth({
      email: null,
      logged: false,
      error: null,
      name: null,
      photoUrl: null,
      uid: null
    })
  }

  const onChecking = () => {
    setAuth({
      checking: true
    })
  }

  return (
    <AuthContext.Provider value={{
      // Propiedades
      auth,
      ...auth,

      // Metodos
      login,
      logout,
      register,
      verificarToken
    }}>
      { children }
    </AuthContext.Provider>
  )
}
