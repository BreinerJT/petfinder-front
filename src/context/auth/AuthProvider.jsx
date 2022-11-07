import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [isVerified, setisVerified] = useState(false)

  const login = () => {
    setisVerified(true)
  }

  const logout = () => {
    setisVerified(false)
  }

  return (
    <AuthContext.Provider value={{
      isVerified,
      login,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}
