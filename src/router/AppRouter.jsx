import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import { AuthRoutes, PetfinderRoutes } from './'

export const AppRouter = () => {
  const { isVerified } = useContext(AuthContext)

  return (
    <>
      <Routes>
        {
          isVerified
            ? <Route path='/*' element={ <PetfinderRoutes /> } />
            : <Route path='/*' element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' /> } />

      </Routes>
    </>
  )
}
