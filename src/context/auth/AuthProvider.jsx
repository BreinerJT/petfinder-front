import { useContext, useCallback, useState } from 'react'

import { AuthContext } from './'
import { PetContext } from '../pet'

import { authApi } from '../../apis'

const initialState = {
  checking: true,
  email: null,
  error: {},
  liked: [],
  logged: false,
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
        uid: data.uid,
        liked: data.liked
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

  const updateLikes = async (uid, petId) => {
    try {
      const { data } = await authApi.put(`/like/${petId}`, { uid })
      setAuth({
        ...auth,
        liked: data.usuario.liked
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateDislikes = async (uid, petId) => {
    try {
      const { data } = await authApi.put(`/dislike/${petId}`, { uid })
      return data.ok
    } catch (error) {
      console.log(error)
    }
  }

  const getLikedPets = useCallback(async () => {
    try {
      const { data } = await authApi.get('/liked')
      setAuth({
        ...auth,
        liked: data.liked
      })
    } catch (error) {
      console.log(error)
    }
  })

  const updatePhotoUrl = async (uid, url) => {
    try {
      const { data } = await authApi.put(`/photo/${uid}`, { url })
      localStorage.setItem('token', data.token)
      setAuth({
        ...auth,
        photoUrl: data.photoUrl
      })
    } catch (error) {
      console.log(error)
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
        uid,
        liked: []
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
      uid: null,
      liked: []
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
      getLikedPets,
      login,
      logout,
      register,
      updateDislikes,
      updateLikes,
      updatePhotoUrl,
      verificarToken
    }}>
      { children }
    </AuthContext.Provider>
  )
}
